from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response

from competitions.serializers import CompetitionSerializer
from competitions.models import Competition

class CompetitionsListView(APIView):
    permission_classes = (permissions.IsAuthenticated, )
    
    def get(self, request):
        serializer = CompetitionSerializer(Competition.objects.all(), many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)

