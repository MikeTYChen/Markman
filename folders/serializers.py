from rest_framework import serializers
from folders.models import Folder

class FolderSerializer(serializers.ModelSerializer):
	class Meta:
		model = Folder
		fields = ('id', 'folder_name')

	def create(self, validated_data):
		folder_name = validated_data.get('folder_name', None)
		folder_name = folder_name[:1].upper() + folder_name[1:]
		return Folder.objects.create(folder_name=folder_name)

	