from django.shortcuts import render
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status, generics

from django.contrib.auth.models import User
from tasks.models import Task
from tasks.serializers import TaskSerializer

def base(request):
    return render(request, 'index.html')

# def task(request, task_id):
#     return render(request, 'task.html', {'id': task_id})

class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get(self, request, format=None):
        print("GET")
        task = Task.objects.all().order_by('-date_created')
        serializer = TaskSerializer(task, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        user = User.objects.first()
        serializer = TaskSerializer(data=request.data, context={'user': user})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer