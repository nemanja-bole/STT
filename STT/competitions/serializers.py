from rest_framework import serializers
from competitions.models import Competition, PlayerCompetitionStat, History
from accounts.serializers import UserSerializer

class CompetitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competition
        fields = ('name', 'date')

class CompetitionPlayersSerializer(serializers.ModelSerializer):
    players = PlayerCompetitionStatSerializer(many = True, read_only = True)

    class Meta:
        model = Competition
        fields = ('name', 'date', 'players')

class PlayerCompetitionStatSerializer(serializers.ModelSerializer):
    competition = CompetitionSerializer(read_only = True)
    player = UserSerializer(read_only = True)

    class Meta:
        model = PlayerCompetitionStat
        fields = ('competition', 'player', 'points', 'games_played', 'won', 'lost', 'drawn')


class History(serializers.ModelSerializer):
    pass