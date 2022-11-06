const BaseResource = require('../resource');

class AuthResource extends BaseResource {
    async login(email, password) {
        return this.makeRequest('post', 'login/', {
            email,
            password,
        });
    }
}

AuthResource.resource = null;
AuthResource.service = '.';

module.exports = AuthResource;
