# Generated by Django 5.0.1 on 2024-02-23 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='angkatan',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='profile',
            name='kontak',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
