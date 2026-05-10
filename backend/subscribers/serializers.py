from rest_framework import serializers
from .models import Subscriber


class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ["email"]

    def validate_email(self, value):
        if Subscriber.objects.filter(email=value, active=True).exists():
            raise serializers.ValidationError("Este email ya está suscripto.")
        return value
