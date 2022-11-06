from datetime import timedelta
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager


db = SQLAlchemy()


def create_app():
    app = Flask(__name__)

    app.config['JWT_SECRET_KEY'] = 'change-me-please'
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///animeapp.db'

    jwt = JWTManager(app)

    db.init_app(app)

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)
    
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from . import models

    with app.app_context():
        db.create_all()

    return app


if __name__ == '__main__':
    create_app().run(debug=True)
