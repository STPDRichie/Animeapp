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
