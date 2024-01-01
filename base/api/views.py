from django.http import JsonResponse
from django.contrib.auth.models import User

from rest_framework import generics, permissions, viewsets, renderers
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView

from .serializers import UserSerializer
from .permissions import PostPermission, AnswerPermission, ReplyPermission, ProfilePermission
from posts.serializers import PostSerializer, AnswerSerializer, ReplySerializer
from posts.models import Post, Answer, Reply
from profiles.serializers import ProfileSerializer
from profiles.models import Profile

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


class UserViewSet(viewsets.ReadOnlyModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  
  
class ProfileViewSet(viewsets.ModelViewSet):
  queryset = Profile.objects.all()
  serializer_class = ProfileSerializer
  
  def get_permissions(self):
    """
    Instantiates and returns the list of permissions that this view requires.
    """
    if self.action == 'update':
        permission_classes = [ProfilePermission]
    else:
        permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    return [permission() for permission in permission_classes]
  

class ProfileList(generics.ListAPIView):
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  queryset = Profile.objects.all()
  serializer_class = ProfileSerializer

class ProfileDetail(generics.RetrieveUpdateAPIView):
  permission_classes = [ProfilePermission]
  queryset = Profile.objects.all()
  serializer_class = ProfileSerializer
  
class PostViewSet(viewsets.ModelViewSet):
  permission_classes = [PostPermission]
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  
  
class AnswerViewSet(viewsets.ModelViewSet):
  permission_classes = [AnswerPermission]
  queryset = Answer.objects.all()
  serializer_class = AnswerSerializer
  
class ReplyViewSet(viewsets.ModelViewSet):
  permission_classes = [ReplyPermission]
  queryset = Reply.objects.all()
  serializer_class = ReplySerializer
  

