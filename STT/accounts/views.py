from django.shortcuts import render

from rest_framework import generics, permissions, serializers
from rest_framework.views import APIView
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework_jwt.utils import jwt_decode_handler


from .models import User
from .serializers import UserCreateSerializer


class UserCreateView(generics.CreateAPIView):
    lookup_field        = 'id'
    serializer_class    = UserCreateSerializer
    permission_classes = (permissions.AllowAny,)


    def get_queryset(self):
        return User.objects.all();


class UserActivationView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        try:
            payload = jwt_decode_handler(request.GET.get('token'))
            user = User.objects.get(id=payload['user_id'])
            user.is_active = True
            user.save()
        except:
            pass        

        return Response({ "activation" : True });



