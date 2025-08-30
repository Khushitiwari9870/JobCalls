from django.contrib import admin
from .models import ChatRoom, Message


@admin.register(ChatRoom)
class ChatRoomAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "created_at")
    search_fields = ("name",)


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("id", "room", "sender", "timestamp")
    search_fields = ("content",)
    list_filter = ("room", "sender")