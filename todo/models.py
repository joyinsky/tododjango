#!/usr/bin/env python
from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

    class Meta:
        app_label = "todo"