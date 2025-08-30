from django.db import models
from django.conf import settings


class Resume(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='resumes', null=True, blank=True)
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    location = models.CharField(max_length=255, blank=True)
    experience_years = models.DecimalField(max_digits=4, decimal_places=1, blank=True, null=True)
    skills = models.TextField(blank=True, help_text='Comma-separated skills')
    summary = models.TextField(blank=True)
    file = models.FileField(upload_to='resumes/uploads/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.full_name} ({self.email})"


class ResumeToolRun(models.Model):
    """Stores results of automated resume tool processing (e.g., keyword extraction, score)."""
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='tool_runs')
    keyword_hits = models.PositiveIntegerField(default=0)
    matched_skills = models.TextField(blank=True, help_text='Comma-separated matched skills')
    score = models.PositiveIntegerField(default=0)
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"ToolRun #{self.id} for {self.resume.full_name}"