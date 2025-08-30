from rest_framework import serializers


class RequestOTPSerializer(serializers.Serializer):
    phone = serializers.CharField(max_length=15)
    purpose = serializers.ChoiceField(choices=['login', 'register', 'verify'])


class VerifyOTPSerializer(serializers.Serializer):
    phone = serializers.CharField(max_length=15)
    code = serializers.CharField(max_length=6)
    purpose = serializers.ChoiceField(choices=['login', 'register', 'verify'])