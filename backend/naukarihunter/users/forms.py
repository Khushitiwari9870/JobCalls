from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser, Profile


class UserRegisterForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ("username", "email", "user_type", "phone", "profile_pic", "password1", "password2")


class UserLoginForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ("username", "password")


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ("bio", "skills", "resume", "linkedin")
