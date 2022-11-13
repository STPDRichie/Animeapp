home_page_lists = '''
query (
    $season: MediaSeason,
    $seasonYear: Int,
    $nextSeason: MediaSeason,
    $nextYear: Int
) {
    trending: Page(page: 1, perPage: 5) {
        media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
            ...media
        }
    }
    season: Page(page: 1, perPage: 5) {
        media(season: $season, seasonYear: $seasonYear, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
            ...media
        }
    }
    nextSeason: Page(page: 1, perPage: 5) {
        media(season: $nextSeason, seasonYear: $nextYear, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
            ...media
        }
    }
    popular: Page(page: 1, perPage: 5) {
        media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
            ...media
        }
    }
    top: Page(page: 1, perPage: 10) {
        media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
            ...media
        }
    }
}

fragment media on Media {
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
    studios(isMain: true) {
        edges {
            isMain
            node {
                id
                name
            }
        }
    }
}
'''

anime_list_query = '''
query (
    $page: Int = 1
    $id: Int
    $type: MediaType = ANIME
    $isAdult: Boolean = false
    $search: String
    $format: [MediaFormat]
    $status: MediaStatus
    $countryOfOrigin: CountryCode
    $source: MediaSource
    $season: MediaSeason
    $seasonYear: Int
    $year: String
    $onList: Boolean
    $yearLesser: FuzzyDateInt
    $yearGreater: FuzzyDateInt
    $episodeLesser: Int
    $episodeGreater: Int
    $durationLesser: Int
    $durationGreater: Int
    $chapterLesser: Int
    $chapterGreater: Int
    $volumeLesser: Int
    $volumeGreater: Int
    $licensedBy: [Int]
    $isLicensed: Boolean
    $genres: [String]
    $excludedGenres: [String]
    $tags: [String]
    $excludedTags: [String]
    $minimumTagRank: Int
    $sort: [MediaSort]
) {
    Page (page: $page, perPage: 20) {
        pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
        }
        media (
            id: $id
            type: $type
            season: $season
            format_in: $format
            status: $status
            countryOfOrigin: $countryOfOrigin
            source: $source
            search: $search
            onList: $onList
            seasonYear: $seasonYear
            startDate_like: $year
            startDate_lesser: $yearLesser
            startDate_greater: $yearGreater
            episodes_lesser: $episodeLesser
            episodes_greater: $episodeGreater
            duration_lesser: $durationLesser
            duration_greater: $durationGreater
            chapters_lesser: $chapterLesser
            chapters_greater: $chapterGreater
            volumes_lesser: $volumeLesser
            volumes_greater: $volumeGreater
            licensedById_in: $licensedBy
            isLicensed: $isLicensed
            genre_in: $genres
            genre_not_in: $excludedGenres
            tag_in: $tags
            tag_not_in: $excludedTags
            minimumTagRank: $minimumTagRank
            sort: $sort
            isAdult: $isAdult
        ) {
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
}
'''

anime_filters = '''
query ($type: ExternalLinkMediaType) {
    ExternalLinkSourceCollection (mediaType: $type, type: STREAMING) {
        id
        url
        site
        type
        language
        color
        icon
    }
    genres: GenreCollection
    tags: MediaTagCollection {
        name
        description
        category
        isAdult
    }
}
'''

anime_list = '''
query (
    $season: MediaSeason,
    $seasonYear: Int,
    $sort: [MediaSort],
    $page: Int
) {
    list: Page(page: $page, perPage: 10) {
        media(season: $season, seasonYear: $seasonYear, sort: $sort, type: ANIME, isAdult: false) {
            ...media
        }
    }
}

fragment media on Media {
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
    studios(isMain: true) {
        edges {
            isMain
            node {
                id
                name
            }
        }
    }
}
'''
