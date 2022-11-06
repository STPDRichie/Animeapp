const BaseResource = require('../resource');

class HomeResource extends BaseResource {
    async fetchHomePageAnime() {
        return this.makeRequest('get', 'anime_lists/');
    }
    async searchAnime(query) {
        return this.makeRequest('post', 'search/', {
            query: query === '' ? null : query,
        });
    }
}

HomeResource.resource = null;
HomeResource.service = 'home_page';

module.exports = HomeResource;
