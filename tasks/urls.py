from django.conf.urls import *
from rest_framework.urlpatterns import format_suffix_patterns

from tasks import views

urlpatterns = [
	url(r'', views.home),
	url(r'^(?P<task_id>[0-9]+)/$', views.task),
    url(r'^api/$', views.TaskList.as_view()),
    url(r'^api/(?P<pk>[0-9]+)/$', views.TaskDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)