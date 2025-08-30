from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Profile


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ("username", "email", "user_type", "is_staff", "is_active")
    list_filter = ("user_type", "is_staff", "is_active")
    fieldsets = (
        (None, {"fields": ("username", "email", "password", "user_type", "phone", "profile_pic")}),
        ("Permissions", {"fields": ("is_staff", "is_active")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("username", "email", "password1", "password2", "user_type", "phone", "profile_pic", "is_staff", "is_active")}
        ),
    )
    search_fields = ("username", "email")
    ordering = ("username",)


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Profile)

