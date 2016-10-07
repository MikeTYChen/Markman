from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
	task_name = models.CharField(max_length=200)
	date_due = models.DateTimeField('date_due')
	date_created = models.DateTimeField('date_created')
	author = models.ForeignKey(User, null=True, blank=True)
	completed = models.BooleanField(default=False)

class Subtask(models.Model):
	task = models.ForeignKey(Task, on_delete=models.CASCADE)
	subtask_name = models.CharField(max_length=200)