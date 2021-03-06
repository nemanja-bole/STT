from django.contrib.auth.base_user import BaseUserManager
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.urls import reverse

from rest_framework_jwt.utils import jwt_encode_handler

from STT.jwt_helper import jwt_payload_handler

class UserManager(BaseUserManager):
    use_in_migrations: True

    def _create_user(self, email, password, **extra_fields):

        if not email:
            raise ValueError("The given email must be set.")

        email = self.normalize_email(email)

        user = self.model(email = email, **extra_fields)

        user.set_password(password)
        user.save(using = self._db)
        if user.is_active is not True:
            self.send_activation_mail(user)

        return user


    def create_user(self, email, password = None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_superuser') is not True and extra_fields.get('is_staff') is not True and extra_fields.get('is_active') is not True:
            raise ValueError("Superuser must have is_superuser, is_staff, is_active = True")

        return self._create_user(email, password, **extra_fields)
      

    # Send activation mail/link for given user
    def send_activation_mail(self, user):
        token = jwt_encode_handler(jwt_payload_handler(user))

        emailModel = {
            "first_name": user.first_name,
            "last_name": user.last_name,
            "link": settings.DEFAULT_DOMAIN + "/activation/" + token                
        }

        msg_plain = render_to_string("activation_email.txt", emailModel)
        msg_html = render_to_string("activation_email.html", emailModel)

        subject = 'Thank you for your registration'
            
        from_email = settings.EMAIL_HOST_USER
        to_list = [user.email]

        send_mail(subject, msg_plain, from_email, to_list, fail_silently = True, html_message = msg_html)

        return