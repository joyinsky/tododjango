#!/usr/bin/env python
from django.contrib import admin

from .models import Todo

admin.site.register(Todo)