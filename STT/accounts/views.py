from django.shortcuts import render

from rest_framework import generics, permissions, serializers, status
from rest_framework.views import APIView
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework_jwt.utils import jwt_decode_handler


from .models import User
from .serializers import UserSerializer

class UserCreateView(generics.CreateAPIView):
    lookup_field        = 'id'
    serializer_class    = UserSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        return User.objects.all();
    
class UserActivationView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        try:
            payload = jwt_decode_handler(request.GET.get('token'))
            user = User.objects.get(id=payload['user_id'])
            if user.is_active is False:
                user.is_active = True
                user.save()
        except:
            pass        

        return Response({ "activation" : True });

class CheckUserRegistredView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        try:
            body = request.data
            email = body.get('email')
            registred = User.objects.filter(email = email).exists()
        
            return Response({ "registred": registred }, status = status.HTTP_200_OK)
        except:
            return Response({"email": "Email is required field.", "error": e}, status=status.HTTP_400_BAD_REQUEST)



