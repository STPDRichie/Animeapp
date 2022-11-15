const BaseResource = require('../resource');

class AnimePagesResource extends BaseResource {
    async fetchHomePageAnime() {
        return this.makeRequest('get', 'anime_lists/');
    }

    async searchAnime(query) {
        return this.makeRequest('post', 'search/', {
            query: query === '' ? null : query,
        });
    }

    async fetchAnimeList(listName, pageNumber) {
        return this.makeRequest('post', 'anime_list/', {
            listName,
            pageNumber,
        });
    }
}

AnimePagesResource.resource = null;
AnimePagesResource.service = 'anime_pages';

module.exports = AnimePagesResource;
