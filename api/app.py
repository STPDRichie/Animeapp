from flask import Flask, request, jsonify
import requests
import json
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager

from anilist_api import base_url
from anilist_api.variables_getters import get_current_season, get_next_season, get_current_year, get_next_year
from anilist_api.query_strings.home_page import anime_list_query, home_page_lists

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = "change-me-please"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)

@app.route('/login/', methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"errors": ["Wrong email or password"]}, 401

    token = create_access_token(identity=email)
    response = {"token": token}
    return response


@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response


@app.route("/logout/", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response


@app.route('/profile/')
@jwt_required()
def get_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body


@app.route('/home_page/anime_lists/', methods=['GET'])
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


@app.route('/home_page/search/', methods=['POST'])
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
