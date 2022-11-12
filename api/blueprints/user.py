from flask import Blueprint, request
from flask_jwt_extended import jwt_required

from .. import db

from ..anilist_api import make_request
from ..anilist_api.query_strings.user import user_info, anime_to_list


user = Blueprint('user', __name__)


@user.route('/user/profile/', methods=['GET'])
@jwt_required()
def get_profile():
    response = make_request(user_info)
    return response.json()


@user.route('/user/add_anime_to_list/', methods=['POST'])
@jwt_required()
def add_anime_to_list():
    status = request.json['status']
    media_id = request.json['mediaId']
    response = make_request(anime_to_list, {
        'status': status,
        'mediaId': media_id
    })
    return response.json()
