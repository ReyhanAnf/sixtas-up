from rest_framework import serializers
from .models import Profile
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
  #nameuser = UserSerializer(many=True, read_only=True)
  #name_data = serializers.StringRelatedField(many=True, read_only=True)
  #name_data = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())
  class Meta:
    model = Profile
    fields = '__all__'