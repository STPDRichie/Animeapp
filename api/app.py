from flask import Flask, request
import requests

from anilist_api import base_url
from anilist_api.query_strings.home_page import anime_list_query

app = Flask(__name__)

@app.route('/trending/', methods=['GET'])
def get_trending():
    response = requests.post(
        base_url,
        json={
            'query': anime_list_query,
            'variables': {'sort': ['TRENDING_DESC', 'POPULARITY_DESC']}
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
