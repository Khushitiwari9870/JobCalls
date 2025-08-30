from django.contrib import admin
from .models import PhoneOTP


@admin.register(PhoneOTP)
class PhoneOTPAdmin(admin.ModelAdmin):
    list_display = ("id", "phone", "purpose", "is_verified", "created_at", "expires_at")
    search_fields = ("phone",)
    list_filter = ("purpose", "is_verified")