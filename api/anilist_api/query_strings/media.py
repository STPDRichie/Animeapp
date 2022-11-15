ANIME_FULL_INFO = '''
query ($mediaId: Int) {
    Media (id: $mediaId) {
        id
        title {
            userPreferred
            romaji
            english
            native
        }
        coverImage {
            extraLarge
            large
            medium
            color
        }
        startDate {
            year
            month
            day
        }
        endDate {
            year
            month
            day
        }
        bannerImage
        season
        seasonYear
        description
        type
        format
        status (version: 2)
        episodes
        duration
        chapters
        volumes
        genres
        isAdult
        averageScore
        popularity
        source
        tags {
            id
            name
        }
        nextAiringEpisode {
            airingAt
            timeUntilAiring
            episode
        }
        mediaListEntry {
            id
            mediaId
            status
            score (format: POINT_5)
            progress
            startedAt {
                year
                month
                day
            }
            completedAt {
                year
                month
                day
            }
            repeat
        }
        studios (isMain: true) {
            edges {
                isMain
                node {
                    id
                    name
                }
            }
        }
    }
}
'''
