from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import generics

from .models import Payments
from .serializers import PaymentsSerializer

class PaymentsViewSet(ViewSet):
    """
    A simple ViewSet for viewing all payment data
    """

    queryset = Payments.objects.all()

    def list(self, request):
        serializer = PaymentsSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
