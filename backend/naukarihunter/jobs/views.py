from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Job, Application, Company
from .serializers import JobSerializer, ApplicationSerializer, CompanySerializer
from .permissions import IsEmployerOrReadOnly


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer
    permission_classes = [IsEmployerOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['job_type', 'location', 'company']
    search_fields = ['title', 'description', 'company__name', 'location']
    ordering_fields = ['created_at', 'salary', 'deadline']

    def perform_create(self, serializer):
        serializer.save(posted_by=self.request.user)


class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()  # Base queryset required for DRF router basename resolution
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['status', 'job']
    search_fields = ['job__title']
    ordering_fields = ['applied_at']

    def get_queryset(self):
        user = self.request.user
        if not user.is_authenticated:
            return Application.objects.none()
        # Employers see applications for their jobs; jobseekers see their own
        if getattr(user, 'user_type', None) == 'employer':
            return Application.objects.filter(job__posted_by=user)
        return Application.objects.filter(applicant=user)

    def perform_create(self, serializer):
        serializer.save(applicant=self.request.user)


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()  # Base queryset for DRF router basename resolution
    serializer_class = CompanySerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['location']
    search_fields = ['name', 'location']
    ordering_fields = ['created_at']

    def get_queryset(self):
        user = self.request.user
        if not user.is_authenticated:
            return Company.objects.none()
        # Employers see their own companies; jobseekers can only read (but we keep ownership scope)
        return Company.objects.filter(owner=user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
