from django.shortcuts import render
from rest_framework import generics, permissions, serializers
from .models import User
from .serializers import UserCreateSerializer
from rest_framework.exceptions import APIException
from django.views.decorators.csrf import csrf_exempt


class UserCreateView(generics.CreateAPIView):
    lookup_field        = 'id'
    serializer_class    = UserCreateSerializer
    permission_classes = (permissions.AllowAny,)


    def get_queryset(self):
        return User.objects.all();

    def perform_create(self, serializer):
        
        return super().perform_create(serializer)



