from django.conf.urls import url, include

from .views import UserCreateView

urlpatterns = [
    url(r'^sign-up/$', UserCreateView.as_view(), name = 'user-sign-up'),    
]

