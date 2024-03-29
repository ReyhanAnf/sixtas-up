# Generated by Django 4.2.9 on 2024-01-07 12:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('posts', '0006_rename_user_post_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.ForeignKey(db_column='username', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='post_user', to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
    ]
