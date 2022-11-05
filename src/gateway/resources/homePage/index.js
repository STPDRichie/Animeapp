const BaseResource = require('../resource');

class HomeResource extends BaseResource {
    async fetchHomePageAnime() {
        return this.makeRequest('get', 'home_page_anime/');
    }
    async searchAnime(query) {
        return this.makeRequest('post', 'search/', {
            query: query === '' ? null : query,
        });
    }
}

HomeResource.resource = null;
HomeResource.service = '.';

module.exports = HomeResource;
