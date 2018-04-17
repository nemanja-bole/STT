from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response

from competitions.services import CreateCompetition, GetCompetitions, GetCompetition

class CompetitionsListView(APIView):
    permission_classes = (permissions.IsAuthenticated, )
    
    def get(self, request):
        competitions = GetCompetitions.execute()

        if not competitions.errors:
            return Response(competitions.data, status = status.HTTP_200_OK)
        else:
            return Response(competitions.data, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        permission_classes = (permissions.IsAuthenticated,)

        new_competition = CreateCompetition.execute(request.data)

        if not new_competition.errors:
            return Response(new_competition.data, status = status.HTTP_201_CREATED)

        return Response(new_competition.errors, status = status.HTTP_400_BAD_REQUEST)


class CompetitionView(APIView):

    def get(self, request, id):
        permission_classes = (permissions.IsAuthenticated,)

        competition = GetCompetition.execute(id)
        
        if competition.errors:
            return Response(competition.data, status = status.HTTP_404_NOT_FOUND)

        return Response(competition.data, status = status.HTTP_200_OK)    

