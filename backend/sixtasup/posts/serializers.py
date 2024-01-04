from rest_framework import serializers
from .models import Post, Answer, Reply

class PostSerializer(serializers.ModelSerializer):
  serializers.ReadOnlyField(source='user.username')
  class Meta:
    model = Post
    fields ='__all__'
    
class AnswerSerializer(serializers.ModelSerializer):
  serializers.ReadOnlyField(source='user.username')
  class Meta:
    model = Answer
    fields ='__all__'
    

class ReplySerializer(serializers.ModelSerializer):
  serializers.ReadOnlyField(source='user.username')
  class Meta:
    model = Reply
    fields ='__all__'