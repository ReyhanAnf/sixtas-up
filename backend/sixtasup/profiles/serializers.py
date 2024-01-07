from rest_framework import serializers
from .models import Profile
from base.api.serializers import UserSerializer

class ProfileSerializer(serializers.ModelSerializer):
  user = UserSerializer(many=False)
  class Meta:
    model = Profile
    fields = '__all__'