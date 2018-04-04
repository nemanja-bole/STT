from django import forms
from django.db import transaction

class Service(forms.Form):

    def service_clean(self):
        if not self.is_valid():
            raise ValueError("Implement error handler!")

    @classmethod
    def execute(cls, inputs, files = None, **kwargs):
        instance = cls(inputs, files, **kwargs)
        instance.service_clean()
        with transaction.atomic():
            return instance.process()

    def process(self):
        raise NotImplementedError();