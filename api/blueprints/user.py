from flask import Blueprint, request
from flask_jwt_extended import jwt_required

from .. import db

from ..anilist_api import make_request
from ..anilist_api.query_strings.user import user_info, anime_to_list, anime_status_change, anime_info


user = Blueprint('user', __name__)


@user.route('/user/profile/', methods=['GET'])
@jwt_required()
def get_profile():
    response = make_request(user_info)
    return response.json()


@user.route('/user/anime_to_list/', methods=['POST'])
@jwt_required()
def add_anime_to_list():
    media_id = request.json['mediaId']
    status = request.json['status']
    response = make_request(anime_to_list, {
        'mediaId': media_id,
        'status': status
    })
    return response.json()


@user.route('/user/anime_info/', methods=['POST'])
@jwt_required()
def get_anime_info():
    media_id = request.json['mediaId']
    response = make_request(anime_info, {
        'mediaId': media_id
    })
    return response.json()


@user.route('/user/change_anime_status/', methods=['POST'])
@jwt_required()
def change_anime_status():
    media_id = request.json['mediaId']
    status = request.json['status'] if request.json['status'] != None else "CURRENT"
    score = request.json['score'] if request.json['score'] != None else 0
    progress = request.json['progress'] if request.json['progress'] != None else 0
    repeat = request.json['repeat'] if request.json['repeat'] != None else 0
    started_at = request.json['startedAt']
    completed_at = request.json['completedAt']
    response = make_request(anime_status_change, {
        'mediaId': media_id,
        'status': status,
        'score': score,
        'progress': progress,
        'repeat': repeat,
        'startedAt': started_at,
        'completedAt': completed_at
    })
    return response.json()
