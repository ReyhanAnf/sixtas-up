from django.db import models
from django.contrib.auth.models import User
# Create your models here.
import uuid


# Create your models here.
class Post(models.Model):
    post_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author_id = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username')
    content_post = models.TextField()
    image = models.ImageField(upload_to='post-images', blank=True)
    like = models.IntegerField(default=0)
    post_at = models.DateField(auto_now_add=True, editable=False)
    
    def __str__(self):
        return str(self.post_id)
    
    
class Answer(models.Model):
    answer_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    answerer_id = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username')
    up = models.IntegerField(default=0)
    down = models.IntegerField(default=0)
    content_answer = models.TextField()
    image = models.ImageField(upload_to='post-images', blank=True)
    answer_at = models.DateField(auto_now_add=True, editable=False)
    
    def __str__(self):
        return str(self.answer_id)
    

class Reply(models.Model):
    reply_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
    replier_id = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username')
    content_reply = models.TextField()
    reply_at = models.DateField(auto_now_add=True, editable=False)
    
    def __str__(self):
        return str(self.reply_id)
    

class Subject(models.Model):
    subject_id = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return str(self.subject_id)