from django.shortcuts import render
from rest_framework import generics, permissions
from .models import User
from .serializers import UserCreateSerializer


# Create your views here.
class UserCreateView(generics.CreateAPIView):
    lookup_field        = 'pk'
    serializer_class    = UserCreateSerializer
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]

    def perform_create(self, serializer):
        serializer.save(user = slef.request.user)
