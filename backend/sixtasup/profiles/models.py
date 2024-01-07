from django.db import models
from django.contrib.auth.models import User

# class Relation(models.Model):
#   choices = {
#     "F": "Friends",
#     "B": "Best Friends",
#     "BF": "Boy Friend",
#     "GF": "Girl Friend",
#     "P" : "Patner"
#   }
#   status = models.CharField(max_length=100, choices=choices)
#   list_of_relations = models.
  

# Create your models here.
class Profile(models.Model):
    nis = models.OneToOneField(User, on_delete=models.CASCADE, to_field='username', primary_key=True, unique=True, related_name='nis')
    user = models.ForeignKey(User, related_name="user_profile", on_delete=models.CASCADE, null=True)
    bio = models.CharField(max_length=50, blank=True)
    kelas = models.CharField(max_length=50, blank=True )
    jurusan = models.CharField(max_length=50, blank=True)
    subjurusan = models.CharField(max_length=10, blank=True)
    jenis_kelamin = models.CharField(max_length=50, blank=True)
    alamat = models.CharField(max_length=200, blank=True)
    angkatan = models.CharField(max_length=10, blank=True)
    kontak = models.CharField(max_length=10, blank=True)
    ttl = models.DateField(blank=True, null=True)
    
    def __str__(self):
      return str(self.nis)
