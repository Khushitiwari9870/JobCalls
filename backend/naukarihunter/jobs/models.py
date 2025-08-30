from django.db import models
from django.conf import settings
from django.utils.text import slugify
from ckeditor.fields import RichTextField


# Company Model
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    website = models.URLField(blank=True, null=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='companies')
    location = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# Job Model
class Job(models.Model):
    JOB_TYPES = (
        ('FT', 'Full Time'),
        ('PT', 'Part Time'),
        ('IN', 'Internship'),
        ('CT', 'Contract'),
        ('FL', 'Freelance'),
    )

    SALARY_TYPES = (
        ('MONTHLY', 'Monthly'),
        ('YEARLY', 'Yearly'),
        ('HOURLY', 'Hourly'),
        ('FIXED', 'Fixed'),
        ('NEGOTIABLE', 'Negotiable'),
    )

    GENDER_PREFERENCE = (
        ('ANY', 'Any'),
        ('MALE', 'Male'),
        ('FEMALE', 'Female'),
        ('OTHER', 'Other'),
    )

    WORKING_SHIFTS = (
        ('DAY', 'Day'),
        ('NIGHT', 'Night'),
        ('ROTATIONAL', 'Rotational'),
        ('FLEXIBLE', 'Flexible'),
    )

    # Core
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=280, unique=True, blank=True)

    # Company snapshot fields (optional; denormalized for display)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="jobs")
    company_name = models.CharField(max_length=255, blank=True)
    company_logo_url = models.URLField(blank=True)

    # Classification
    industry = models.CharField(max_length=255, blank=True)
    sub_industry = models.CharField(max_length=255, blank=True)
    functional_area = models.CharField(max_length=255, blank=True)

    # Location details
    state = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    location = models.CharField(max_length=255)

    # Job attributes
    job_type = models.CharField(max_length=2, choices=JOB_TYPES)
    number_of_openings = models.PositiveIntegerField(default=1)
    salary_type = models.CharField(max_length=12, choices=SALARY_TYPES, default='MONTHLY')
    # INR salary by default; can be None for undisclosed
    salary = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    gender = models.CharField(max_length=8, choices=GENDER_PREFERENCE, default='ANY')
    experience = models.CharField(max_length=100, blank=True, help_text="e.g., 2-4 years")
    required_skills = models.TextField(blank=True, help_text="Comma-separated skills")
    working_shift = models.CharField(max_length=12, choices=WORKING_SHIFTS, default='DAY')
    education = models.CharField(max_length=255, blank=True)

    # SEO
    seo_title = models.CharField(max_length=255, blank=True)
    seo_keywords = models.TextField(blank=True, help_text="Comma-separated keywords")
    seo_description = models.TextField(blank=True)

    # Meta
    description = models.TextField()
    posted_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="posted_jobs")
    created_at = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title} at {self.company.name}"

    def save(self, *args, **kwargs):
        # Auto-populate slug from title if not provided; ensure uniqueness by appending id later if needed
        if not self.slug and self.title:
            base_slug = slugify(self.title)[:75]  # leave room for suffix
            candidate = base_slug
            i = 1
            # Simple uniqueness loop; handles collisions in-memory
            while Job.objects.filter(slug=candidate).exclude(pk=self.pk).exists():
                i += 1
                candidate = f"{base_slug}-{i}"[:80]
            self.slug = candidate
        # Snapshot company name if not provided
        if self.company and not self.company_name:
            self.company_name = self.company.name
        super().save(*args, **kwargs)


# Application Model
class Application(models.Model):
    STATUS_CHOICES = (
        ('AP', 'Applied'),
        ('RV', 'In Review'),
        ('AC', 'Accepted'),
        ('RJ', 'Rejected'),
    )

    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name="applications")
    applicant = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="applications")
    resume = models.FileField(upload_to="resumes/")
    cover_letter = models.TextField(blank=True)
    status = models.CharField(max_length=2, choices=STATUS_CHOICES, default='AP')
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.applicant.username} → {self.job.title}"


# Payment Model
class Payment(models.Model):
    STATUS_CHOICES = (
        ('created', 'Created'),
        ('authorized', 'Authorized'),
        ('captured', 'Captured'),
        ('refunded', 'Refunded'),
        ('failed', 'Failed'),
    )

    # Link payment to a Job
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name="payments")

    # Customer details
    customer_name = models.CharField(max_length=255)
    customer_email = models.EmailField()
    customer_phone = models.CharField(max_length=20)

    # Razorpay identifiers
    razorpay_order_id = models.CharField(max_length=255, unique=True)
    razorpay_payment_id = models.CharField(max_length=255, blank=True, null=True, unique=True)
    razorpay_signature = models.CharField(max_length=512, blank=True, null=True)

    # Amount and currency
    amount_paise = models.PositiveIntegerField(help_text="Amount in paise (e.g., 99900 for ₹999)")
    currency = models.CharField(max_length=10, default='INR')

    # Status
    status = models.CharField(max_length=16, choices=STATUS_CHOICES, default='created')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer_name} - {self.amount_paise} {self.currency} ({self.status})"


# HiringCompany Model
class HiringCompany(models.Model):
    image = models.ImageField(upload_to='hiring_companies/', blank=True, null=True)
    name = models.CharField(max_length=255)
    company_number = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# Industry Model
class Industry(models.Model):
    name = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# SubIndustry Model
class SubIndustry(models.Model):
    industry = models.ForeignKey(Industry, on_delete=models.CASCADE, related_name='sub_industries')
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('industry', 'name')

    def __str__(self):
        return f"{self.name} ({self.industry.name})"


# FunctionalArea Model
class FunctionalArea(models.Model):
    sub_industry = models.ForeignKey(SubIndustry, on_delete=models.CASCADE, related_name='functional_areas')
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('sub_industry', 'name')

    def __str__(self):
        return f"{self.name} ({self.sub_industry.name})"


# Candidate Detail Model
class CandidateDetail(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=20)
    location = models.CharField(max_length=255, blank=True)
    experience = models.CharField(max_length=100, blank=True)
    area_of_interest = models.CharField(max_length=255, blank=True)
    resume = models.FileField(upload_to='candidate_resumes/')
    pincode = models.CharField(max_length=10, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# Blog Model
class Blog(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=280, unique=True, blank=True)
    image = models.ImageField(upload_to='blogs/', blank=True, null=True)
    description = RichTextField(blank=True)  # CKEditor field
    seo_title = models.CharField(max_length=255, blank=True)
    seo_keyword = models.TextField(blank=True, help_text="Comma-separated keywords")
    seo_description = RichTextField(blank=True)  # CKEditor field
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        # Auto-generate slug from title if not provided
        if not self.slug and self.title:
            base_slug = slugify(self.title)[:75]
            candidate = base_slug
            i = 1
            from .models import Blog as BlogModel  # avoid shadowing during evaluation
            while BlogModel.objects.filter(slug=candidate).exclude(pk=self.pk).exists():
                i += 1
                candidate = f"{base_slug}-{i}"[:80]
            self.slug = candidate
        super().save(*args, **kwargs)


# State and City Models
class State(models.Model):
    name = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class City(models.Model):
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='cities')
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('state', 'name')
        ordering = ['name']

    def __str__(self):
        return f"{self.name}, {self.state.name}"