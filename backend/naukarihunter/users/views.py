from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import CustomUser, Profile
from .forms import UserRegisterForm, UserLoginForm, ProfileForm


def register_user(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save()
            Profile.objects.create(user=user)  # create blank profile
            login(request, user)
            messages.success(request, "Account created successfully!")
            return redirect("profile")
    else:
        form = UserRegisterForm()
    return render(request, "users/register.html", {"form": form})


def login_user(request):
    if request.method == "POST":
        form = UserLoginForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("profile")
            else:
                messages.error(request, "Invalid username or password")
    else:
        form = UserLoginForm()
    return render(request, "users/login.html", {"form": form})


@login_required
def profile(request):
    profile = request.user.profile
    if request.method == "POST":
        form = ProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            messages.success(request, "Profile updated successfully!")
            return redirect("profile")
    else:
        form = ProfileForm(instance=profile)
    return render(request, "users/profile.html", {"form": form})

