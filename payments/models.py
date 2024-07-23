from django.db import models
from datetime import datetime


class Payments(models.Model):
    paytype_id = models.IntegerField(default=1, blank=True, null=True)
    amount = models.IntegerField(default=1, blank=True, null=True)
    date = models.DateTimeField(default=datetime.now())
    provider_id = models.IntegerField(default=1, blank=True, null=True)
    employee_type_id = models.IntegerField(default=1, blank=True, null=True)

