const BaseResource = require('../resource');

class AuthResource extends BaseResource {
    async signup(name, email, password) {
        return this.makeRequest('post', 'signup/', {
            name,
            email,
            password,
        });
    }

    async login(email, password) {
        return this.makeRequest('post', 'login/', {
            email,
            password,
        });
    }

    async loginCallback(access_token, expires_in) {
        return this.makeRequest('post', 'login-callback/', {
            access_token,
            expires_in,
        });
    }

    async logout() {
        return this.makeRequest('post', 'logout/');
    }

    async getProfile() {
        return this.makeRequest('get', 'profile/');
    }
}

AuthResource.resource = null;
AuthResource.service = '.';

module.exports = AuthResource;
