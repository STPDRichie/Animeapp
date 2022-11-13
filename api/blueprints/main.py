from flask import Blueprint, request
from flask_jwt_extended import jwt_required

from .. import db

from ..anilist_api import make_request
from ..anilist_api.variables_getters import get_current_season, get_next_season, \
    get_current_year, get_next_year, get_anime_list_variables
from ..anilist_api.query_strings.anime_pages import anime_list_query, home_page_lists, anime_list


main = Blueprint('main', __name__)


@main.route('/anime_pages/anime_lists/', methods=['GET'])
@jwt_required(optional=True)
def get_home_page_anime():
    response = make_request(home_page_lists, {
        'season': get_current_season(),
        'seasonYear': get_current_year(),
        'nextSeason': get_next_season(),
        'nextYear': get_next_year()
    })
    return response.json()


@main.route('/anime_pages/search/', methods=['POST'])
@jwt_required(optional=True)
def search_anime():
    search_query = request.json['query']
    response = make_request(anime_list_query, {
        'search': search_query
    })
    return response.json()


@main.route('/anime_pages/anime_list/', methods=['POST'])
@jwt_required(optional=True)
def get_anime_list():
    list_name = request.json['listName']
    page_number = request.json['pageNumber']
    response = make_request(anime_list, get_anime_list_variables(list_name, page_number))
    return response.json()
