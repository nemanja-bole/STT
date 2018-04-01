from django.conf.urls import url, include

from .views import CompetitionsListView, CompetitionView

urlpatterns = [
    url(r'^$', CompetitionsListView.as_view(), name = 'competitions-list'),
    url(r'^(?P<id>[0-9]+)/?$', CompetitionView.as_view(), name = 'get-competition'),
]
