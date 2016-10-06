from django.conf.urls import include, url
from django.contrib import admin

from tasks import views

urlpatterns = [
    url(r'^api/v1/task/', include('tasks.urls')),
    url(r'^api/v1/folder/', include('folders.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.base),
]
