from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, ApplicationViewSet, CompanyViewSet , BlogViewSet
from .api import (
    BlogListAPIView, BlogDetailAPIView, 
    BlogCreateAPIView, BlogUpdateAPIView, BlogDeleteAPIView
)

router = DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'applications', ApplicationViewSet, basename='application')
router.register(r'companies', CompanyViewSet, basename='company')
router.register(r'blogs', BlogViewSet, basename='blog')

blog_urlpatterns = [
    path('', BlogListAPIView.as_view(), name='blog-list'),
    path('create/', BlogCreateAPIView.as_view(), name='blog-create'),
    path('<slug:slug>/', BlogDetailAPIView.as_view(), name='blog-detail'),
    path('<slug:slug>/update/', BlogUpdateAPIView.as_view(), name='blog-update'),
    path('<slug:slug>/delete/', BlogDeleteAPIView.as_view(), name='blog-delete'),
]

urlpatterns = [
    path('', include(router.urls)),
    path('blogs/', include((blog_urlpatterns, 'blog'))),
]
