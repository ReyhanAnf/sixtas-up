from rest_framework import serializers
from django.contrib.auth.models import User
from profiles.models import Profile

class UserSerializer(serializers.ModelSerializer):
  profile = serializers.HyperlinkedRelatedField(many=True, view_name='profiles-detail', read_only=True)

  class Meta:
    model = User
    fields = ['username', 'first_name', 'profile']
  
class UserPostSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = User
    fields = "__all__"
  
