from rest_framework import serializers
from .models import Resume, ResumeToolRun


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')


class ResumeToolRunSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeToolRun
        fields = '__all__'
        read_only_fields = ('id', 'created_at')