from django.contrib import admin
from .models import Resume, ResumeToolRun


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'email', 'phone', 'location', 'experience_years', 'created_at')
    search_fields = ('full_name', 'email', 'phone', 'location', 'skills')
    list_filter = ('location', 'created_at')


@admin.register(ResumeToolRun)
class ResumeToolRunAdmin(admin.ModelAdmin):
    list_display = ('id', 'resume', 'keyword_hits', 'score', 'created_at')
    search_fields = ('resume__full_name', 'matched_skills')
    list_filter = ('score', 'created_at')