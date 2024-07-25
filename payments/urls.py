from django.urls import path
from .views import PaymentsViewSet

app_name = 'payments'

urlpatterns = [
    path('', PaymentsViewSet.as_view({'get': 'list'})),
    path('create/', PaymentsViewSet.as_view({'post': 'create'})),
    path('<int:pk>/', PaymentsViewSet.as_view({'get': 'retrieve'})),
    path('update/<int:pk>/', PaymentsViewSet.as_view({'put': 'update'})),
    path('delete/<int:pk>/', PaymentsViewSet.as_view({'delete': 'destroy'}))
]
