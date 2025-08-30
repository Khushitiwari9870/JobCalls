from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils.crypto import get_random_string

from .models import PhoneOTP
from .serializers import RequestOTPSerializer, VerifyOTPSerializer
from .sms import send_sms


class RequestOTPView(APIView):
    def post(self, request):
        serializer = RequestOTPSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone = serializer.validated_data['phone']
        purpose = serializer.validated_data['purpose']
        code = get_random_string(length=6, allowed_chars='0123456789')
        PhoneOTP.objects.create(phone=phone, code=code, purpose=purpose)
        send_sms(phone, f"Your OTP is {code}. It expires in 10 minutes.")
        return Response({'detail': 'OTP sent'}, status=status.HTTP_201_CREATED)


class VerifyOTPView(APIView):
    def post(self, request):
        serializer = VerifyOTPSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone = serializer.validated_data['phone']
        code = serializer.validated_data['code']
        purpose = serializer.validated_data['purpose']

        try:
            otp = PhoneOTP.objects.filter(phone=phone, purpose=purpose).latest('created_at')
        except PhoneOTP.DoesNotExist:
            return Response({'detail': 'OTP not found'}, status=status.HTTP_400_BAD_REQUEST)

        if otp.is_expired():
            return Response({'detail': 'OTP expired'}, status=status.HTTP_400_BAD_REQUEST)

        if otp.code != code:
            return Response({'detail': 'Invalid code'}, status=status.HTTP_400_BAD_REQUEST)

        otp.is_verified = True
        otp.save(update_fields=['is_verified'])
        return Response({'detail': 'OTP verified'}, status=status.HTTP_200_OK)