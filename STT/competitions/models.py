from django.db import models
from django.conf import settings
from django.core.exceptions import ValidationError

from competitions.managers import CompetitionManager

class Competition(models.Model):
    name = models.CharField(max_length = 30)
    date = models.DateTimeField(auto_now_add = True)

    objects = CompetitionManager()

    class Meta:
        verbose_name = "competition"
        verbose_name_plural = "competitions"

    def __str__(self):
        return self.name

class PlayerCompetitionStat(models.Model):
    player = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, related_name = "competitions")
    competition = models.ForeignKey(Competition, on_delete=models.DO_NOTHING, related_name="players")
    points = models.DecimalField(max_digits = 10, decimal_places = 2)
    games_played = models.IntegerField()
    won = models.IntegerField()
    lost = models.IntegerField()
    drawn = models.IntegerField()

    def __str__(self):
        return competition.name + ": " + player.get_full_name()



class History(models.Model):
    competition = models.ForeignKey(Competition, on_delete = models.DO_NOTHING)
    player_one = models.ForeignKey(settings.AUTH_USER_MODEL, related_name= "history_player_one")
    player_two = models.ForeignKey(settings.AUTH_USER_MODEL, related_name= "history_player_two")
    result = models.IntegerField()
    score = models.CharField(max_length = 30)
    date = models.DateTimeField()

    def __str__(self):
        return player1.get_full_name() + " : " + player2.get_full_name()

    def clean(self):
        if player_one.id < player_two.id:
            raise ValidationError("Player one Id have to be greater than player two Id.")