from rest_framework import serializers
from .models import User

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'password',
            'first_name',
            'last_name',
            ]
        write_only_fields = ('password',)
        read_only_fields = ('id',)

        def create(self, validated_data):
            user = User.objects.create_user(
                email = validated_data['email'],
                first_name = validated_data['first_name'],
                last_name = validated_data['last_name'],
            )

            user.set_password(validated_data['password'])
            user.save()

            return user;
