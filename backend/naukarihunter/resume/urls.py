from rest_framework.routers import DefaultRouter
from .views import ResumeViewSet, ResumeToolRunViewSet

router = DefaultRouter()
router.register(r'resumes', ResumeViewSet, basename='resume')
router.register(r'resume-tool-runs', ResumeToolRunViewSet, basename='resume-tool-run')

urlpatterns = router.urls