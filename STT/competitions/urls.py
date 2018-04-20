from django.conf.urls import url, include

from competitions.views import CompetitionsListView, CompetitionView, PlayerCompetitionStatisticsList

urlpatterns = [
    url(r'^$', CompetitionsListView.as_view(), name = 'competitions-list'),
    url(r'^(?P<id>[0-9]+)/?$', CompetitionView.as_view(), name = 'get-competition'),
    url(r'^(?P<competition_id>[0-9]+)/players/?$', PlayerCompetitionStatisticsList.as_view(), name = 'players-in-competition'),

]
