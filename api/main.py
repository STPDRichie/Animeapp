import requests
from flask import Blueprint, request
from flask_jwt_extended import jwt_required

from . import db
from .anilist_api import base_url
from .anilist_api.variables_getters import get_current_season, get_next_season, get_current_year, get_next_year
from .anilist_api.query_strings.home_page import anime_list_query, home_page_lists


main = Blueprint('main', __name__)


@main.route('/profile/')
@jwt_required()
def get_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body


@main.route('/home_page/anime_lists/', methods=['GET'])
def get_home_page_anime():
    response = requests.post(
        base_url,
        json={
            'query': home_page_lists,
            'variables': {
                'season': get_current_season(),
                'seasonYear': get_current_year(),
                'nextSeason': get_next_season(),
                'nextYear': get_next_year()
            }
        }
    )
    return response.json()


@main.route('/home_page/search/', methods=['POST'])
def search_anime():
    search_query = request.json['query']
    response = requests.post(
        base_url,
        json={
            'query': anime_list_query,
            'variables': {'search': search_query}
        }
    )
    return response.json()
