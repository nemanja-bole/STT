from django.contrib.auth.base_user import BaseUserManager
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string

from accounts.models import ActivationEmail #circular dependency exception TODO resolve

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
            
            emailModel = {
                "first_name": user.first_name,
                "last_name": user.last_name,
                "link": user.link,
                
            }

            msg_plain = render_to_string("templates/email_templates/activation_email.txt", emailModel)
            msg_html = render_to_string("templates/email_templates/activation_email.html", emailModel)

            subject = 'Thank you for your registration'
            message = 'Thank you for your registration. Please go to link below to activate your account.'
            from_email = settings.EMAIL_HOST_USER
            to_list = [settings.EMAIL_HOST_USER]

            send_mail(subject, msg_plain, from_email, to_list, fail_silently = True, html_message = msg_html)

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

