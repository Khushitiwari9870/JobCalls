from django.urls import path
from .api_views import RegisterAPIView, MeAPIView, ProfileAPIView

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='api-register'),
    path('me/', MeAPIView.as_view(), name='api-me'),
    path('profile/', ProfileAPIView.as_view(), name='api-profile'),
]
