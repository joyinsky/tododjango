from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^', include('todo.urls')),
    url(r'^api/', include('todo.api')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^djangojs/', include('djangojs.urls')),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
