#!/usr/bin/env python

from django.conf.urls import patterns, include, url
from rest_framework import viewsets, routers, serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo


class TodoViewSet(viewsets.ModelViewSet):
    model = Todo
    serializer_class = TodoSerializer

router = routers.DefaultRouter()
router.register('todos', TodoViewSet)

urlpatterns = patterns('',
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
)
