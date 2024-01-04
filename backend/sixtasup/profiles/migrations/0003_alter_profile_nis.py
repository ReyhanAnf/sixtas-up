# Generated by Django 4.2.7 on 2024-01-01 05:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('profiles', '0002_remove_profile_id_alter_profile_nis'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='nis',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL, to_field='username', unique=True),
        ),
    ]