import requests
from flask_jwt_extended import get_jwt

base_url = 'https://graphql.anilist.co'
oauth_url = 'https://anilist.co/api/v2/oauth/authorize?client_id=9997&response_type=token'

def make_request(query, variables = None):
    try:
        token = get_jwt()['sub']
        return requests.post(
            base_url,
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
            base_url,
            json={
                'query': query,
                'variables': variables
            }
        )
