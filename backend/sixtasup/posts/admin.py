from django.contrib import admin

# Register your models here.
from .models import Post, Answer, Reply
admin.site.register(Post)
admin.site.register(Answer)
admin.site.register(Reply)