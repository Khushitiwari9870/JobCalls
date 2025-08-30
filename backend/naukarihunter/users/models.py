from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    USER_TYPES = (
        ('employer', 'Employer'),
        ('jobseeker', 'Job Seeker'),
    )

    user_type = models.CharField(max_length=20, choices=USER_TYPES, default='jobseeker')
    phone = models.CharField(max_length=15, blank=True, null=True)
    profile_pic = models.ImageField(upload_to="profiles/", blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.user_type})"


class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="profile")
    bio = models.TextField(blank=True)
    skills = models.TextField(blank=True)  # can store comma-separated skills
    resume = models.FileField(upload_to="resumes/", blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.user.username

