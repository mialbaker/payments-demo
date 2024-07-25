from rest_framework import serializers
from .models import Payments

class PaymentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payments
        fields = ['pk', 'paytype_id', 'amount', 'date', 'provider_id', 'employee_type_id']