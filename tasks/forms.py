from django.forms import ModelForm
from tasks.models import Task

class TaskForm(ModelForm):
	class Meta:
		model = Task
		fields = ['task_name', 'due_date', 'date_create']