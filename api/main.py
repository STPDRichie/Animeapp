from flask import Blueprint, request
from flask_jwt_extended import jwt_required

from . import db
from .models import User

from .anilist_api import make_request
from .anilist_api.variables_getters import get_current_season, get_next_season, get_current_year, get_next_year
from .anilist_api.query_strings.home_page import anime_list_query, home_page_lists
from .anilist_api.query_strings.user import user_info


main = Blueprint('main', __name__)


@main.route('/profile/', methods=['GET'])
@jwt_required()
def get_profile():
    response = make_request(user_info)
    return response.json()


@main.route('/home_page/anime_lists/', methods=['GET'])
def get_home_page_anime():
    response = make_request(home_page_lists, {
        'season': get_current_season(),
        'seasonYear': get_current_year(),
        'nextSeason': get_next_season(),
        'nextYear': get_next_year()
    })
    return response.json()


@main.route('/home_page/search/', methods=['POST'])
def search_anime():
    search_query = request.json['query']
    response = make_request(anime_list_query, {
        'search': search_query
    })
    return response.json()
