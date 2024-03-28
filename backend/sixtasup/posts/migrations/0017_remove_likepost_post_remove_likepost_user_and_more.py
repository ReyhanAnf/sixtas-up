# Generated by Django 5.0.1 on 2024-03-27 05:40

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0016_remove_likepost_user_likepost_user'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='likepost',
            name='post',
        ),
        migrations.RemoveField(
            model_name='likepost',
            name='user',
        ),
        migrations.AddField(
            model_name='likepost',
            name='post',
            field=models.ManyToManyField(related_name='likes', to='posts.post'),
        ),
        migrations.AddField(
            model_name='likepost',
            name='user',
            field=models.ManyToManyField(related_name='like_user', to=settings.AUTH_USER_MODEL),
        ),
    ]
