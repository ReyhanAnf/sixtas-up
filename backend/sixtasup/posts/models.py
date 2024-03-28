from django.db import models
from django.contrib.auth.models import User
from profiles.models import Profile
# Create your models here.
import uuid


# Create your models here.
class Post(models.Model):
    post_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(User, related_name="post_user", on_delete=models.CASCADE, null=True, to_field="username", db_column="username")
    content = models.TextField()
    image = models.ImageField(upload_to='post-images', blank=True)
    tags = models.TextField(default="#shared")
    post_at = models.DateField(auto_now_add=True, editable=False)
    likes = models.ManyToManyField(Profile, related_name='likes', db_column="nis", blank=True)
    
    
    def __str__(self):
        return str(self.post_id)
    
    
class Answer(models.Model):
    answer_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="answers", null=True)
    user = models.ForeignKey(User, related_name="answer_user", on_delete=models.CASCADE, null=True, to_field="username", db_column="username")
    up = models.IntegerField(default=0)
    down = models.IntegerField(default=0)
    content = models.TextField()
    image = models.ImageField(upload_to='post-images', blank=True)
    at = models.DateField(auto_now_add=True, editable=False)
    
    def __str__(self):
        return str(self.answer_id)
    

class Reply(models.Model):
    reply_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE, related_name="replies")
    user = models.ForeignKey(User, related_name="reply_user", on_delete=models.CASCADE, null=True, to_field="username", db_column="username")
    content = models.TextField()
    at = models.DateField(auto_now_add=True, editable=False)
    
    def __str__(self):
        return str(self.reply_id)
    

class Subject(models.Model):
    subject_id = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return str(self.subject_id)
    

# class LikePost(models.Model):
#     id = models.AutoField(primary_key=True, editable=False)
#     user = models.ManyToManyField(User, related_name='like_user')
#     post = models.ManyToManyField(Post, related_name='likes')