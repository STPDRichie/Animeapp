const BaseResource = require('../resource');

class UserResource extends BaseResource {
    async getProfile() {
        return this.makeRequest('get', 'profile/');
    }

    async getUserAnimeLists(userId) {
        return this.makeRequest('post', 'get_user_anime_lists/', {
            userId,
        });
    }

    async addAnimeToList(status, mediaId) {
        return this.makeRequest('post', 'add_anime_to_list/', {
            status,
            mediaId,
        });
    }

    async deleteAnimeFromLists(entryId) {
        return this.makeRequest('post', 'delete_anime_from_lists/', {
            entryId,
        });
    }

    async fetchAnimeInfo(mediaId) {
        return this.makeRequest('post', 'anime_info/', {
            mediaId,
        });
    }

    async changeAnimeStatus(mediaId, formData) {
        return this.makeRequest('post', 'change_anime_status/', {
            mediaId,
            ...formData,
        });
    }
}

UserResource.resource = null;
UserResource.service = 'user';

module.exports = UserResource;
