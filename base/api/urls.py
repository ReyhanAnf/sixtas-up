from django.urls import path, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', views.ProfileViewSet, basename='users')
router.register(r'posts', views.PostViewSet, basename='posts')
router.register(r'answers', views.AnswerViewSet, basename='answers')

urlpatterns = [
    path('', include(router.urls)),
]
