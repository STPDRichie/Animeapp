const BaseResource = require('../resource');

class AnimeResource extends BaseResource {
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

AnimeResource.resource = null;
AnimeResource.service = 'anime_pages';

module.exports = AnimeResource;
