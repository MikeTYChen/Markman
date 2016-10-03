from __future__ import unicode_literals

from django.db import models

class Task(models.Model):
	task_name = models.CharField(max_length=200)
	due_date = models.DateTimeField('date_due')
	date_create = models.DateTimeField('date_created')

class Subtask(models.Model):
	task = models.ForeignKey(Task, on_delete=models.CASCADE)
	task_name = models.CharField(max_length=200)