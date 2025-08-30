from django.db import models
from django.utils import timezone
from datetime import timedelta


class PhoneOTP(models.Model):
    PURPOSES = (
        ('login', 'Login'),
        ('register', 'Register'),
        ('verify', 'Verify'),
    )
    phone = models.CharField(max_length=15, db_index=True)
    code = models.CharField(max_length=6)
    purpose = models.CharField(max_length=20, choices=PURPOSES, default='login')
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    def save(self, *args, **kwargs):
        if not self.expires_at:
            self.expires_at = timezone.now() + timedelta(minutes=10)
        super().save(*args, **kwargs)

    def is_expired(self) -> bool:
        return timezone.now() > self.expires_at

    def __str__(self) -> str:
        return f"{self.phone} - {self.purpose} - {self.code}"