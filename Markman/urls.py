from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^task/', include('tasks.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'', include('tasks.urls')),
]
