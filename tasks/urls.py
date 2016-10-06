from django.conf.urls import *
from rest_framework.urlpatterns import format_suffix_patterns

from tasks import views

urlpatterns = [ 
    url(r'^all', views.TaskList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', views.TaskDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)