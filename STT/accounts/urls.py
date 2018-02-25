from django.conf.urls import url, include

from .views import UserCreateView, UserActivationView, CheckUserRegistredView

urlpatterns = [
    url(r'^sign-up/$', UserCreateView.as_view(), name = 'user-sign-up'),
    url(r'^activation/$', UserActivationView.as_view(), name = 'user-activation'),
    url(r'^availability/$', CheckUserRegistredView.as_view(), name = 'user-registred-check'),
]