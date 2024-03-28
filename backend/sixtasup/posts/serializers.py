from rest_framework import serializers
from .models import Post, Answer, Reply

class LikePostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = ["likes", "post_id"]

class ReplySerializer(serializers.ModelSerializer):
  class Meta:
    model = Reply
    fields ='__all__'
    

class AnswerSerializer(serializers.ModelSerializer):
  replies = ReplySerializer(many=True, read_only=True)
  class Meta:
    model = Answer
    fields ='__all__'
    
    
class PostSerializer(serializers.ModelSerializer):
  answers = AnswerSerializer(many=True,read_only=True)
  # likes = LikePostSerializer(many=True, read_only=True)
  
  class Meta:
    model = Post
    fields = '__all__'
    
    

    


    

    


    
  

    
