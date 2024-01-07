from rest_framework import serializers
from .models import Post, Answer, Reply
from base.api.serializers import UserSerializer
from django.contrib.auth.models import User


class ReplySerializer(serializers.ModelSerializer):
  user = UserSerializer()
  class Meta:
    model = Reply
    fields ='__all__'
    

class AnswerSerializer(serializers.ModelSerializer):
  user = UserSerializer()
  replies = ReplySerializer(many=True, read_only=True)
  class Meta:
    model = Answer
    fields ='__all__'
    
    
class PostSerializer(serializers.ModelSerializer):
  author = UserSerializer()
  answers = AnswerSerializer(many=True,read_only=True)
  class Meta:
    model = Post
    fields = '__all__'



    


    

    
  

    
