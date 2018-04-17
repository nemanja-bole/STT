from django.http import JsonResponse

from competitions.serializers import CompetitionSerializer
from competitions.models import Competition
from STT.services import Service


class CreateCompetition(Service):

    def process(self, data, files):
        write_serializer = CompetitionSerializer(data = data)

        if write_serializer.is_valid():
            new_competition = write_serializer.save()
            read_serializer = CompetitionSerializer(new_competition)
            return self.createResponse(read_serializer.data, False)
        else:
            return self.createResponse(write_serializer.errors, True)
    
class GetCompetitions(Service):

    def process(self, data, files):
        serializer = CompetitionSerializer(Competition.objects.all(), many = True)
        return self.createResponse(serializer.data, False)