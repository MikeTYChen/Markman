from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

from .models import Task

def index(request):
    task_list = Task.objects.order_by('-date_create')[:5]
    context = {
        'task_list': task_list,
    }
    return render(request, 'tasks/index.html', context)

def task(request, task_id):
    return HttpResponse("You're looking at task %s." % task_id)

def complete(request, task_id):
    return HttpResponse("You're completing task %s." % task_id)