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