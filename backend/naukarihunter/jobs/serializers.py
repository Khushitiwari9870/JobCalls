from rest_framework import serializers
from .models import Job, Application, Company


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'website', 'location', 'created_at']
        read_only_fields = ['id', 'created_at']


class JobSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    company_id = serializers.PrimaryKeyRelatedField(
        queryset=Company.objects.all(), source='company', write_only=True
    )

    class Meta:
        model = Job
        fields = [
            'id', 'title', 'slug',
            'industry', 'sub_industry', 'functional_area',
            'state', 'city', 'location',
            'job_type', 'number_of_openings',
            'salary_type', 'salary', 'gender', 'experience', 'required_skills', 'working_shift', 'education',
            'description',
            'seo_title', 'seo_keywords', 'seo_description',
            # Company linkage and snapshot
            'company', 'company_id', 'company_name', 'company_logo_url',
            # Meta
            'posted_by', 'created_at', 'deadline', 'is_active'
        ]
        read_only_fields = ['posted_by', 'created_at', 'slug', 'company_name']

    def validate_company(self, company):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            if company.owner_id != request.user.id:
                raise serializers.ValidationError('You can post jobs only for your own company.')
        return company

    def validate(self, attrs):
        request = self.context.get('request')
        company = attrs.get('company')
        if request and company and company.owner_id != request.user.id:
            raise serializers.ValidationError({'company_id': 'You can select only your own company.'})
        return attrs


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = [
            'id', 'job', 'applicant', 'resume', 'cover_letter',
            'status', 'applied_at'
        ]
        read_only_fields = ['applicant', 'applied_at']