const BaseResource = require('../resource');

class UserResource extends BaseResource {
    async getProfile() {
        return this.makeRequest('get', 'profile/');
    }

    async addAnimeToList(status, mediaId) {
        return this.makeRequest('post', 'anime_to_list/', {
            status,
            mediaId,
        });
    }

    async fetchAnimeInfo(mediaId) {
        return this.makeRequest('post', 'anime_info/', {
            mediaId,
        });
    }
}

UserResource.resource = null;
UserResource.service = 'user';

module.exports = UserResource;
