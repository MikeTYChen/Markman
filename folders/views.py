from django.shortcuts import render
from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework import status, generics

from django.contrib.auth.models import User
from folders.models import Folder
from folders.serializers import FolderSerializer

# Create your views here.
class FolderList(generics.ListCreateAPIView):
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer

    def get(self, request, format=None):
        folder = Folder.objects.all().order_by('folder_name')
        serializer = FolderSerializer(folder, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        user = User.objects.first()
        serializer = FolderSerializer(data=request.data, context={'user': user})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FolderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer