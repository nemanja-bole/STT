from django.conf import settings
from rest_framework import serializers

from competitions.models import Competition, PlayerCompetitionStat, History
from accounts.serializers import UserSerializer

class CompetitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competition
        fields = ("id","name", "date",)
        read_only_fields = ("id","date",)

    def create(self, validated_data):
        return Competition.objects.create(**validated_data)
        

class PlayerCompetitionStatSerializer(serializers.ModelSerializer):
    competition = CompetitionSerializer(read_only = True)
    player = UserSerializer(read_only = True)

    class Meta:
        model = PlayerCompetitionStat
        fields = ("competition", "player", "points", "games_played", "won", "lost", "drawn",)


class HistorySerializer(serializers.ModelSerializer):
    competition = CompetitionSerializer(read_only = True)
    player_one = UserSerializer(read_only = True)
    player_two = UserSerializer(read_only = True)
    
    class Meta:
        model = History
        fields = ("competition", "player_one", "player_two", "result", "score", "date",)


class CompetitionPlayersSerializer(serializers.ModelSerializer):
    players = PlayerCompetitionStatSerializer(many = True, read_only = True)

    class Meta:
        model = Competition
        fields = ("name", "date", "players",)

class PlayerHistorySerializer(serializers.ModelSerializer):
    played_games_one = HistorySerializer(many = True)
    played_games_two = HistorySerializer(many = True)

    class Meta:
        model = settings.AUTH_USER_MODEL
        fields = ("id", "email", "first_name", "last_name", "played_games_one", )

