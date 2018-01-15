from datetime import datetime
from calendar import timegm
from rest_framework_jwt.settings import api_settings
#uncomment if you are using custom user
#from django.conf import settings

#edit user to
def jwt_payload_handler(user):
    return {
        'user_id':user.pk,        
        'email': user.email,
        'is_superuser': user.is_superuser,
        'exp': datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA,
        'orig_iat': timegm(datetime.utcnow().utctimetuple())
    }

def jwt_response_payload_handler(token, user = None, request = None):
    return {
        'token': token
    }

def get_username_field(payload):
    return payload.get('email')