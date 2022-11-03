const BaseResource = require('../resource');

class HomeResource extends BaseResource {
    async searchAnime(query) {
        return this.makeRequest('post', 'search/', {
            query: query === '' ? null : query,
        });
    }
}

HomeResource.resource = null;
HomeResource.service = '.';

module.exports = HomeResource;
