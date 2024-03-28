from rest_framework import serializers
from .models import Profile
from base.api.serializers import UserSerializer
from django.contrib.auth.models import User


class ProfileSerializer(serializers.ModelSerializer):
  user = UserSerializer(many=False)
  class Meta:
    model = Profile
    fields = ['nis','bio', 'kelas','jurusan', 'subjurusan', 'jenis_kelamin', 'alamat', 'angkatan', 'kontak', 'ttl', 'user']
    
  def update(self,instance , validated):
    instance.bio = validated.get('bio', instance.bio)
    instance.kelas = validated.get('kelas', instance.kelas)
    instance.jurusan = validated.get('jurusan', instance.jurusan)
    instance.subjurusan = validated.get('subjurusan', instance.subjurusan)
    instance.jenis_kelamin = validated.get('jenis_kelamin', instance.jenis_kelamin)
    instance.alamat = validated.get('alamat', instance.alamat)
    instance.angkatan = validated.get('angkatan', instance.angkatan)
    instance.kontak = validated.get('kontak', instance.kontak)
    instance.ttl = validated.get('ttl', instance.ttl)
    instance.user.first_name = "hahaa"

    instance.save()
    
    return instance
  
  def update_perform(self, user):
    instance = user.save()
    