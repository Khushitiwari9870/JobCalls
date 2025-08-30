from django.contrib import admin
from .models import Job, Company, Application, Payment, HiringCompany, Industry, SubIndustry, FunctionalArea, CandidateDetail, Blog, State, City


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'location', 'created_at')
    search_fields = ('name', 'location')


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'company', 'location', 'job_type', 'created_at', 'is_active')
    search_fields = ('title', 'company__name', 'location')
    list_filter = ('location', 'job_type', 'is_active')


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('id', 'job', 'applicant', 'status', 'applied_at')
    search_fields = ('job__title', 'applicant__username')
    list_filter = ('status',)


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'job', 'customer_name', 'customer_email', 'amount_paise',
        'currency', 'status', 'razorpay_order_id', 'razorpay_payment_id', 'created_at'
    )
    search_fields = (
        'customer_name', 'customer_email', 'customer_phone',
        'razorpay_order_id', 'razorpay_payment_id'
    )
    list_filter = ('status', 'currency', 'created_at')
    readonly_fields = ('razorpay_signature', 'created_at')


@admin.register(HiringCompany)
class HiringCompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'company_number', 'created_at')
    search_fields = ('name', 'company_number')


@admin.register(Industry)
class IndustryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_at')
    search_fields = ('name',)


@admin.register(SubIndustry)
class SubIndustryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'industry', 'created_at')
    search_fields = ('name', 'industry__name')
    list_filter = ('industry',)


@admin.register(FunctionalArea)
class FunctionalAreaAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'sub_industry', 'created_at')
    search_fields = ('name', 'sub_industry__name', 'sub_industry__industry__name')
    list_filter = ('sub_industry__industry', 'sub_industry')


@admin.register(CandidateDetail)
class CandidateDetailAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'name', 'email', 'mobile_number', 'location',
        'experience', 'area_of_interest', 'pincode', 'created_at'
    )
    search_fields = ('name', 'email', 'mobile_number', 'location', 'area_of_interest', 'pincode')
    list_filter = ('location', 'area_of_interest', 'created_at')


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'slug', 'created_at', 'updated_at')
    search_fields = ('title', 'slug', 'seo_title', 'seo_keyword')
    prepopulated_fields = {"slug": ("title",)}
    list_filter = ('created_at', 'updated_at')


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_at')
    search_fields = ('name',)
    ordering = ('name',)


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'state', 'created_at')
    search_fields = ('name', 'state__name')
    list_filter = ('state',)
    ordering = ('state__name', 'name')