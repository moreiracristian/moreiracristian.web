from django.contrib import admin
from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "company", "created_at", "read"]
    list_filter = ["read", "created_at"]
    search_fields = ["name", "email", "company"]
    readonly_fields = ["name", "email", "company", "message", "created_at"]
    ordering = ["-created_at"]
