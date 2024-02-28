from django.urls import path, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register(r'users', views.UserViewSet, basename='users')
#router.register(r'profiles', views.ProfileViewSet, basename='profiles')
router.register(r'posts', views.PostViewSet, basename='posts')
router.register(r'answers', views.AnswerViewSet, basename='answers')
router.register(r'replies', views.ReplyViewSet, basename='replies')

urlpatterns = [
    path('', include(router.urls)),
    path('users/', views.UserList.as_view(), name="users-list"),
    path('profiles/', views.ProfileList.as_view(), name="profiles-list"),
    path('profiles/<str:pk>/', views.ProfileDetail.as_view(), name='profiles-detail'),
]
