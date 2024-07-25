from django.db import models
from datetime import datetime

class Payments(models.Model):
    paytype_id = models.IntegerField(default=1, blank=True, null=True)
    amount = models.FloatField(default=1, blank=True, null=True)
    date = models.DateTimeField(default=datetime.now())
    provider_id = models.CharField(max_length=10, default="", blank=True, null=True)
    employee_type_id = models.IntegerField(default=1, blank=True, null=True)

    def __str__(self):
        return self.paytype_id
