from django.conf.urls import url, include

from .views import CompetitionsListView

urlpatterns = [
    url(r'^$', CompetitionsListView.as_view(), name = 'competitions-list'),
]
