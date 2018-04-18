from django.http import JsonResponse

from competitions.serializers import CompetitionSerializer
from competitions.models import Competition
from common.services import Service


class CreateCompetition(Service):

    def process(self, data, files, **kwargs):
        write_serializer = CompetitionSerializer(data = data)

        if write_serializer.is_valid():
            new_competition = write_serializer.save()
            read_serializer = CompetitionSerializer(new_competition)
            return self.createResponse(read_serializer.data, False)
        else:
            return self.createResponse(write_serializer.errors, True)
    
class GetCompetitions(Service):

    def process(self, data, files, **kwargs):
        serializer = CompetitionSerializer(Competition.objects.all(), many = True)
        return self.createResponse(serializer.data, False)

class GetCompetition(Service):

    def process(self, data, files, **kwargs):
        try:
            serializer = CompetitionSerializer(Competition.objects.get(id = data), many = False)
        except:
            return self.createResponse({"detail": "Not found"}, True);

        return self.createResponse(serializer.data, False)


class UpdateCompetition(Service):

    def process(self, data, files, id = None):
        try:
            competition = Competition.objects.get(id = id)
        except:
            return self.createResponse({"detail": "Not found"}, True)

        write_serializer = CompetitionSerializer(competition, data = data)

        if write_serializer.is_valid():
            updated_competition = write_serializer.save()
            read_serializer = CompetitionSerializer(updated_competition)
            return self.createResponse(read_serializer.data, False)
        else:
            return self.createResponse(read_serializer.errors, True)
