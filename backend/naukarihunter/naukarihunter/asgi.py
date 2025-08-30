"""
ASGI config for naukarihunter project with Channels.
"""
import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'naukarihunter.settings')

django_asgi_app = get_asgi_application()

# Import websocket routes lazily to avoid app registry issues
try:
    from chat.routing import websocket_urlpatterns
except Exception:
    websocket_urlpatterns = []

application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": AuthMiddlewareStack(
        URLRouter(websocket_urlpatterns)
    ),
})