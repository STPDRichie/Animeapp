from flask import Flask, request
import requests

from anilist_api import base_url
from anilist_api.variables_getters import get_current_season, get_next_season, get_current_year, get_next_year
from anilist_api.query_strings.home_page import anime_list_query, home_page_lists

app = Flask(__name__)

@app.route('/home_page_anime/', methods=['GET'])
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

@app.route('/search/', methods=['POST'])
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


if __name__ == '__main__':
    app.run(debug=True)
