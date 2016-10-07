from rest_framework import serializers
from tasks.models import Task
from datetime import datetime, timedelta

class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields = ('id', 'task_name', 'author', 'date_due', 'date_created', 'completed')

	def create(self, validated_data):
		task_name = validated_data.get('task_name', None)
		user = self.context.get('user')
		date_created = datetime.now()
		date_due = datetime.now() + timedelta(days=1)
		return Task.objects.create(task_name=task_name, author=user, date_due=date_due, date_created=date_created)


	