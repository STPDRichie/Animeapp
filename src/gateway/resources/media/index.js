const BaseResource = require('../resource');

class MediaResource extends BaseResource {
    async fetchFullAnimeInfo(mediaId) {
        return this.makeRequest('post', 'full_anime_info/', {
            mediaId,
        });
    }
}

MediaResource.resource = null;
MediaResource.service = 'media';

module.exports = MediaResource;
