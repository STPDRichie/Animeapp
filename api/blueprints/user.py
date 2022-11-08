from flask import Blueprint, request
from flask_jwt_extended import jwt_required

from .. import db

from ..anilist_api import make_request
from ..anilist_api.query_strings.user import user_info


user = Blueprint('user', __name__)


@user.route('/profile/', methods=['GET'])
@jwt_required()
def get_profile():
    response = make_request(user_info)
    return response.json()
