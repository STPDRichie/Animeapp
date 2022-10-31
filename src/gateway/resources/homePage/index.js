const BaseResource = require('../resource');

class HomeResource extends BaseResource {
    async fetchPopular() {
        return this.makeRequest('post', 'popular/', {
            query: 'Naruto',
        });
    }
}

HomeResource.resource = null;
HomeResource.service = '.';

module.exports = HomeResource;
