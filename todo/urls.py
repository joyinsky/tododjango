#!/usr/bin/env python

from django.conf.urls import patterns, url, include
from .views import IndexView

urlpatterns = patterns('',
                       url(r'^$', IndexView.as_view()),
                       )