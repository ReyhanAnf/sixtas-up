from django.contrib.auth.models import User
from profiles.models import Profile
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

class UserRegister(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
      
      data = request.data
      
      first_name = data['fullname']
      last_name = data['shortname']
      username = data['username']
      password = data['password']
      re_password = data['re_password']
      
      if password == re_password:
        if len(password) >= 8:
          if not User.objects.filter(username=username).exists():
            user = User.objects.create_user(
              username=username, 
              password=password,
              first_name=first_name, 
              last_name=last_name
            )
            
            user.save()
            if User.objects.filter(username=username).exists():
              profile = Profile.objects.create(
                nis = User.objects.filter(username=username).first(),
              )
              profile.save()
              return Response(
                {'success': 'User Profile successfully created'},
                status= status.HTTP_201_CREATED
              )

            else:
              return Response(
                {'error': 'Something went wrong while creating user'},
                status= status.HTTP_500_INTERNAL_SERVER_ERROR
              )
            
            
          else:
            return Response(
              {'error': 'Username already exists'},
              status= status.HTTP_400_BAD_REQUEST
            )
        else:
          return Response(
              {'error': 'Passwords is not 8 characters'},
              status= status.HTTP_400_BAD_REQUEST
            )
      else:
        return Response(
              {'error': 'Password is incorrect / invalid'},
              status= status.HTTP_400_BAD_REQUEST
            )

          
      # except:
      #   return Response(
      #           {'error': 'Something went wrong while Registration'},
      #           status= status.HTTP_500_INTERNAL_SERVER_ERROR
      #         )