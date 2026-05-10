from django.db import models


class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ["-subscribed_at"]
        verbose_name = "Suscriptor"
        verbose_name_plural = "Suscriptores"

    def __str__(self):
        return self.email
