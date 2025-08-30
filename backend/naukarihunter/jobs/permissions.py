from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsEmployerOrReadOnly(BasePermission):
    message = "Only employers can modify job resources."

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user.is_authenticated and getattr(request.user, 'user_type', None) == 'employer'