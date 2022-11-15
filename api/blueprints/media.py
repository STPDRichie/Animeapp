from flask import Blueprint, request
from flask_jwt_extended import jwt_required

from ..anilist_api import make_request
from ..anilist_api.query_strings.media import FULL_ANIME_INFO


media = Blueprint('media', __name__)


@media.route('/media/full_anime_info/', methods=['POST'])
@jwt_required(optional=True)
def get_full_anime_info():
    media_id = request.json['mediaId']
    response = make_request(FULL_ANIME_INFO, {
        'mediaId': media_id
    })
    return response.json()
