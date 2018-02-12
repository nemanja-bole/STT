from django.contrib import admin
from competitions.models import Competition, PlayerCompetitionStat, History


admin.site.register(Competition)
admin.site.register(PlayerCompetitionStat)
admin.site.register(History)