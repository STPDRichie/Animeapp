USER_INFO = '''
{
    Viewer {
        id
        name
        about
        avatar {
            large
        }
        bannerImage
        unreadNotificationCount
        donatorTier
        donatorBadge
        moderatorRoles
        options {
            titleLanguage
            staffNameLanguage
            restrictMessagesToFollowing
            airingNotifications
            displayAdultContent
            profileColor
            notificationOptions {
                type
                enabled
            }
            disabledListActivity {
                type
                disabled
            }
        }
        mediaListOptions {
            scoreFormat
            rowOrder
            animeList {
                customLists
                sectionOrder
                splitCompletedSectionByFormat
                advancedScoring
                advancedScoringEnabled
            }
            mangaList {
                customLists
                sectionOrder
                splitCompletedSectionByFormat
                advancedScoring
                advancedScoringEnabled
            }
        }
    }
}
'''

USER_ANIME_LIST = '''
query (
    $userId: Int,
    $userName: String,
    $type: MediaType = ANIME
) {
    MediaListCollection (
        userId: $userId,
        userName: $userName,
        type: $type
    ) {
        lists {
            name
            isCustomList
            isCompletedList: isSplitCompletedList
            entries {
                ...mediaListEntry
            }
        }
    }
}

fragment mediaListEntry on MediaList {
    media {
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
}
'''

ADD_ANIME_TO_LIST = '''
mutation (
    $mediaId: Int,
    $status: MediaListStatus,
) {
    SaveMediaListEntry (
        mediaId: $mediaId,
        status: $status,
    ) {
        mediaId
        status
    }
}
'''

DELETE_ANIME_FROM_LISTS = '''
mutation ($id: Int) {
    DeleteMediaListEntry (id: $id) {
        deleted
    }
}
'''

CHANGE_ANIME_STATUS = '''
mutation (
    $mediaId: Int,
    $status: MediaListStatus,
    $score: Float,
    $progress: Int,
    $progressVolumes: Int,
    $repeat: Int,
    $notes: String,
    $startedAt: FuzzyDateInput,
    $completedAt: FuzzyDateInput
) {
    SaveMediaListEntry (
        mediaId: $mediaId,
        status: $status,
        score: $score,
        progress: $progress,
        progressVolumes: $progressVolumes,
        repeat: $repeat,
        notes: $notes,
        startedAt: $startedAt,
        completedAt: $completedAt
    ) {
        mediaId
        status
        score (format: POINT_5)
        progress
        progressVolumes
        repeat
        priority
        notes
        updatedAt
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
        media {
            id
            volumes
            chapters
            averageScore
            popularity
            isAdult
            startDate {
                year
            }
        }
    }
}
'''

ANIME_INFO = '''
query ($mediaId: Int) {
    Media(id: $mediaId) {
        id
        type
        status (version: 2)
        episodes
        chapters
        volumes
        isFavourite
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
    }
}
'''