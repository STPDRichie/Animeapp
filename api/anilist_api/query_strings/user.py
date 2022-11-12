user_info = '''
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

anime_to_list = '''
mutation (
    $id: Int,
    $mediaId: Int,
    $status: MediaListStatus,
    $score: Float,
    $progress: Int,
    $progressVolumes: Int,
    $repeat: Int,
    $private: Boolean,
    $notes: String,
    $customLists: [String],
    $hiddenFromStatusLists: Boolean,
    $advancedScores: [Float],
    $startedAt: FuzzyDateInput,
    $completedAt: FuzzyDateInput
) {
    SaveMediaListEntry (
        id: $id,
        mediaId: $mediaId,
        status: $status,
        score: $score,
        progress: $progress,
        progressVolumes: $progressVolumes,
        repeat: $repeat,
        private: $private,
        notes: $notes,
        customLists: $customLists,
        hiddenFromStatusLists: $hiddenFromStatusLists,
        advancedScores: $advancedScores,
        startedAt: $startedAt,
        completedAt: $completedAt
    ) {
        id
        mediaId
        status
        score
        advancedScores
        progress
        progressVolumes
        repeat
        priority
        private
        hiddenFromStatusLists
        customLists
        notes
        updatedAt
    }
}
'''