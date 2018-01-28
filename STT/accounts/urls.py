from django.conf.urls import url, include

from .views import UserCreateView, UserActivationView

urlpatterns = [
    url(r'^sign-up/$', UserCreateView.as_view(), name = 'user-sign-up'),
    url(r'^activation/(?P<token>[\w]+)/$', UserActivationView.as_view(), name = 'user-activation'),
]

