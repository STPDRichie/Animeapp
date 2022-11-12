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