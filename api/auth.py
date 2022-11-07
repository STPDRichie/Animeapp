import json
from datetime import datetime, timedelta, timezone
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, \
                               unset_jwt_cookies
from werkzeug.security import generate_password_hash, check_password_hash

from . import db
from .models import User


auth = Blueprint('auth', __name__)


@auth.route('/login/', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    
    user = User.query.filter_by(email=email).first()

    if not user:
        return {'errors': ['Email don\'t registered']}, 401

    if not check_password_hash(user.password, password):
        return {'errors': ['Wrong password']}, 401

    token = create_access_token(identity=email)
    response = {'msg': 'Login successfully', 'token': token}
    return response


@auth.route('/login-callback/', methods=['POST'])
def login_callback():
    access_token = request.json.get('access_token')
    expires_in = request.json.get('expires_in')
    token = create_access_token(
        identity=access_token,
        expires_delta=timedelta(seconds=int(expires_in))
    )
    return {'token': token}


@auth.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()['exp']
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data['token'] = token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response


@auth.route('/signup/', methods=['POST'])
def signup():
    name = request.json.get('name', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    user = User.query.filter_by(email=email).first()

    if user:
        return {'errors': ['User with this email already exists']}, 401
    
    new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))

    db.session.add(new_user)
    db.session.commit()

    return {'msg': 'Register successfully'}


@auth.route('/logout/', methods=['POST'])
def logout():
    response = jsonify({'msg': 'Logout successfully'})
    unset_jwt_cookies(response)
    return response