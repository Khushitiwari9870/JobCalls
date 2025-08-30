from rest_framework.permissions import BasePermission


class IsEmployer(BasePermission):
    message = "Only employers can perform this action."

    def has_permission(self, request, view):
        return request.user.is_authenticated and getattr(request.user, 'user_type', None) == 'employer'


class IsJobSeeker(BasePermission):
    message = "Only job seekers can perform this action."

    def has_permission(self, request, view):
        return request.user.is_authenticated and getattr(request.user, 'user_type', None) == 'jobseeker'