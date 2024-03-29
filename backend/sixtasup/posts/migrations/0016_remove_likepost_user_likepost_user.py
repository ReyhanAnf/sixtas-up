# Generated by Django 5.0.1 on 2024-03-27 05:25

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0015_remove_likepost_post_remove_likepost_user_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='likepost',
            name='user',
        ),
        migrations.AddField(
            model_name='likepost',
            name='user',
            field=models.OneToOneField(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='like_user', to=settings.AUTH_USER_MODEL, to_field='username'),
            preserve_default=False,
        ),
    ]
