#!/usr/bin/env python
from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=200)
    is_completed = models.BooleanField(default=False)

    def __unicode__(self):
        return self.title

    class Meta:
        app_label = "todo"
