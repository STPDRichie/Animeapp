from flask import Flask, request
import requests

from anilist_api import base_url
from anilist_api.query_strings.home_page import search

app = Flask(__name__)

@app.route('/search/', methods=['POST'])
def search_anime():
    search_query = request.json['query']
    response = requests.post(
        base_url,
        json={
            'query': search,
            'variables': {'search': search_query}
        }
    )
    return response.json()


if __name__ == '__main__':
    app.run(debug=True)
