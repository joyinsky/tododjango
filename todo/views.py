#!/usr/bin/env python

from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'todo/index.html'