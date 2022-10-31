from flask import Flask, request
import requests

from anilist_api import base_url
from anilist_api.query_strings.home_page import popular

app = Flask(__name__)

@app.route('/popular/', methods=['POST'])
def get_popular():
    search_query = request.json['query']
    response = requests.post(
        base_url,
        json={
            'query': popular,
            'variables': {'search': search_query}
        }
    )
    return {'popular': response.json()}


if __name__ == '__main__':
    app.run(debug=True)
