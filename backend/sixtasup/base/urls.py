from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('register/', views.UserRegister.as_view(), name='user-register'),
]


urlpatterns = format_suffix_patterns(urlpatterns)