from django.contrib import admin
from competitions.models import Competition, PlayerCompetitionStat, History


admin.site.register([Competition, PlayerCompetitionStat, History])