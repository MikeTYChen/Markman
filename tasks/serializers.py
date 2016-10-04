from rest_framework import serializers
from tasks.models import Task

class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields = ('id', 'task_name', 'author', 'date_due', 'date_created')

	def create(self, validated_data):
		task_name = validated_data.get('task_name', None)
		user = self.context.get('user')
		date_due = validated_data.get('date_due', None)
		date_created = validated_data.get('date_created', None)
		return Task.objects.create(task_name=task_name, author=user, date_due=date_due, date_created=date_created)

	