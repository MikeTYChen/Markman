from django.conf.urls import *
from rest_framework.urlpatterns import format_suffix_patterns

from folders import views

urlpatterns = [
    url(r'^all', views.FolderList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', views.FolderDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)