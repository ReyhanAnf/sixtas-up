# Generated by Django 5.0.1 on 2024-03-27 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0020_alter_post_likes'),
        ('profiles', '0002_alter_profile_angkatan_alter_profile_kontak'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='likes',
            field=models.ManyToManyField(db_column='nis', related_name='likes', to='profiles.profile'),
        ),
    ]
