from django.urls import path
from .views import PaymentsViewSet

app_name = 'payments'

urlpatterns = [
    path('', PaymentsViewSet.as_view({'get': 'list'}))
]