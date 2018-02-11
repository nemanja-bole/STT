from rest_framework import serializers
from .models import User
import re

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'password',
            'first_name',
            'last_name',
            )
        
        read_only_fields = ('id',)


    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)                        
        return user

    def validate_email(self, value):
        qs = User.objects.filter(email = value)   
            
        if qs.exists():
            raise serializers.ValidationError("You are already signed up.")

        regex = r"@svea.com$"

        if re.search(regex, value) is None:
            raise serializers.ValidationError("You must have Svea email account.")

        return value


