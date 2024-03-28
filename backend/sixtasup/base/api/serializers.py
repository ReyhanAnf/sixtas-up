from rest_framework import serializers
from django.contrib.auth.models import User
from profiles.models import Profile

class UserSerializer(serializers.ModelSerializer):
  profile = serializers.HyperlinkedRelatedField(many=True, view_name='profiles-detail', read_only=True)

  class Meta:
    model = User
    fields = ['username', 'first_name', 'last_name','email', 'profile', 'is_active']
  
  def update(self,instance , validated):
    instance.first_name = validated.get('first_name', instance.first_name)
    instance.last_name = validated.get('last_name', instance.last_name)
    instance.email = validated.get('email', instance.email)
    instance.save()
    return instance