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


class CompetitionView(APIView):

    def get(self, request, id):
        try:
            serializer = CompetitionSerializer(Competition.objects.get(id = id), many = False)
        except:
            return Response(status= status.HTTP_404_NOT_FOUND);

        return Response(serializer.data, status = status.HTTP_200_OK)


    def post(self, request):
        serializer = CompetitionSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save
            return Response(serializer.data, status= status.HTTP_201_CREATED)

        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

