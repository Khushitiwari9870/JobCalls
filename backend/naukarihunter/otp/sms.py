from django.conf import settings


def send_sms(phone: str, message: str) -> None:
    provider = getattr(settings, 'SMS_PROVIDER', 'console')
    if provider == 'console':
        # Dev mode: just print to console (or log)
        print(f"[SMS][DEV] to {phone}: {message}")
        return

    if provider == 'twilio':
        from twilio.rest import Client
        sid = settings.SMS_TWILIO_SID
        token = settings.SMS_TWILIO_TOKEN
        sender = settings.SMS_TWILIO_FROM
        client = Client(sid, token)
        client.messages.create(to=phone, from_=sender, body=message)
        return

    if provider == 'msg91':
        # Placeholder; integrate MSG91 API here using requests
        # Example pseudo:
        # requests.post('https://api.msg91.com/api/v5/otp', headers={...}, json={...})
        print(f"[SMS][MSG91] to {phone}: {message}")
        return

    # Fallback
    print(f"[SMS][UNKNOWN PROVIDER] to {phone}: {message}")