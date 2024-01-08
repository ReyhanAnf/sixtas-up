from rest_framework.permissions import SAFE_METHODS, BasePermission


class PostPermission(BasePermission):
  message = "Tindakan terhadap Postingan hanya dilakukan oleh Pengguna Terautentikasi"

  def has_object_permission(self, request, view, obj):
    
    if request.method in SAFE_METHODS:
      return True
    
    if request.method == "POST":
      if str(obj.author.username) != str(request.user.username):
        return False
    
    return str(obj.author.username) == str(request.user.username)
    

# class AnswerPermission(BasePermission):
#   message = "Tindakan terhadap Jawaban hanya dilakukan oleh Pengguna Terautentikasi"
  
#   def has_object_permission(self, request, view, obj):
#     if request.method in SAFE_METHODS:
#       return True
      
#     return str(obj.answerer_id) == str(request.user.username)
    
    
# class ReplyPermission(BasePermission):
#   message = "Tindakan terhadap Balasan hanya dilakukan oleh Pengguna Terautentikasi"
  
#   def has_object_permission(self, request, view, obj):
#     if request.method in SAFE_METHODS:
#       return True
      
#     return str(obj.replier_id) == str(request.user.username)
    

class ProfilePermission(BasePermission):
  message = "Tindakan terhadap Profile hanya dilakukan oleh Pengguna Terautentikasi"
  def has_object_permission(self, request, view, obj):
    if request.method in SAFE_METHODS:
      return True
      
    return str(obj.nis) == str(request.user.username)