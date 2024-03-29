from django.http import JsonResponse
from django.contrib.auth.models import User

from rest_framework import generics, permissions, viewsets, mixins
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from rest_framework.authentication import BasicAuthentication, SessionAuthentication

from .serializers import UserSerializer
from .permissions import ProfilePermission, PostPermission, UserPermission
from posts.serializers import PostSerializer, AnswerSerializer, ReplySerializer, LikePostSerializer
from posts.models import Post, Answer, Reply
from profiles.serializers import ProfileSerializer
from profiles.models import Profile

from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


# @api_view(['GET'])
# def getRoutes(request):
#   routes = [
#     '/api/token'
#   ]
#   return Response(routes)


@api_view(['GET'])
def api_root(request, format=None):
  return Response({
    'posts': reverse('posts-all', request=request, format=format),
    'users': reverse('users-all', request=request, format=format)
  })
  

# Create your views here.
class UserList(generics.ListAPIView):
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  queryset = User.objects.all()
  serializer_class = UserSerializer
  filter_backends = [filters.SearchFilter]
  search_fields = ['username', 'first_name']
  
class UserDetail(generics.RetrieveUpdateAPIView):
  permission_classes = [permissions.IsAuthenticatedOrReadOnly, UserPermission]
  queryset = User.objects.all()
  serializer_class = UserSerializer

class ProfileList(generics.ListAPIView):
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  queryset = Profile.objects.all()
  serializer_class = ProfileSerializer
  filter_backends = [filters.SearchFilter]
  search_fields = ['user__username', 'user__first_name']

class ProfileDetail(generics.RetrieveUpdateAPIView):
  permission_classes = [permissions.IsAuthenticatedOrReadOnly,ProfilePermission]
  queryset = Profile.objects.all()
  serializer_class = ProfileSerializer
  
  
class PostViewSet(viewsets.ModelViewSet):
  permission_classes = [PostPermission,permissions.IsAuthenticatedOrReadOnly]
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
  ordering_fields = ["post_at"]
  search_fields = ["tags","content"]
  filterset_fields = ['author']
  
class LikeViewSet(viewsets.ModelViewSet):
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  queryset = Post.objects.all()
  serializer_class = LikePostSerializer
  

class AnswerViewSet(viewsets.ModelViewSet):
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  queryset = Answer.objects.all()
  serializer_class = AnswerSerializer
  filter_backends = [filters.SearchFilter, DjangoFilterBackend]
  filterset_fields = ['post']
  
  
class ReplyViewSet(viewsets.ModelViewSet):
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  queryset = Reply.objects.all()
  serializer_class = ReplySerializer
  filter_backends = [filters.SearchFilter, DjangoFilterBackend]
  filterset_fields = ['answer']
  



# class ProfileViewSet(viewsets.ModelViewSet, mixins.RetrieveModelMixin):
#   #authentication_classes = [SessionAuthentication, BasicAuthentication]
#   queryset = Profile.objects.all()
#   serializer_class = ProfileSerializer

#   def get_permissions(self):
#     """
#     Instantiates and returns the list of permissions that this view requires.
#     """
#     if self.action == 'update' or 'patch':
#         permission_classes = [ProfilePermission]
#     elif self.action == 'delete':
#         permission_classes = [permissions.DjangoModelPermissions]
#     else:
#         permission_classes = [permissions.IsAuthenticatedOrReadOnly]
#     return [permission() for permission in permission_classes]
