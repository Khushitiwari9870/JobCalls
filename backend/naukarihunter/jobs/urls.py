from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, ApplicationViewSet, CompanyViewSet

router = DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'applications', ApplicationViewSet, basename='application')
router.register(r'companies', CompanyViewSet, basename='company')

urlpatterns = [
    path('', include(router.urls)),
]
