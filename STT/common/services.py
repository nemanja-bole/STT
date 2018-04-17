from django import forms
from django.db import transaction
from .dtos import Dto

class Service:

    @classmethod
    def execute(cls, inputs = None, files = None, **kwargs):
        instance = cls()
        with transaction.atomic():
            return instance.process(inputs, files)

    def process(self, data, files):
        raise NotImplementedError();

    def createResponse(self, data, errors):
        return Dto(data = data, errors = errors)