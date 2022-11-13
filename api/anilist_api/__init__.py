import requests
from flask_jwt_extended import get_jwt

BASE_URL = 'https://graphql.anilist.co'
OAUTH_URL = 'https://anilist.co/api/v2/oauth/authorize?client_id=9997&response_type=token'


def make_request(query, variables = None):
    try:
        token = get_jwt()['sub']
        return requests.post(
            BASE_URL,
            json={
                'query': query,
                'variables': variables
            },
            headers={
                'Authorization': f'Bearer {token}'
            }
        )
    except (RuntimeError, KeyError):
        return requests.post(
            BASE_URL,
            json={
                'query': query,
                'variables': variables
            }
        )
