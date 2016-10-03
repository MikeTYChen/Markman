from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.template import loader

from .models import Task
from .forms import TaskForm

def index(request):
    task_list = Task.objects.order_by('-date_create')[:5]
    context = {
        'task_list': task_list,
    }
    return render(request, 'tasks/templates/index.html', context)

def create(request):
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save(commit=True)
            return HttpResponseRedirect('/')
    else:
        form = TaskForm()
    return render(request, 'tasks/templates/create.html', {'form': form})

def task(request, task_id):
    return HttpResponse("You're looking at task %s." % task_id)

def complete(request, task_id):
    return HttpResponse("You're completing task %s." % task_id)