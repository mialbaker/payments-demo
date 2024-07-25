from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

from .models import Payments
from .serializers import PaymentsSerializer

class PaymentsViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing all payment data
    """

    queryset = Payments.objects.all()
    serializer_class = PaymentsSerializer