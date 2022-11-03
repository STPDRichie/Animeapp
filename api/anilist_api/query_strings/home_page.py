search = '''
query ($search: String) {
    Page(page: 1) {
        media(search: $search, type: ANIME) {
            id
            idMal
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
            season
            seasonYear
            format
            status
            episodes
            duration
            isAdult
            genres
            averageScore
            popularity
            source
            description
            tags {
                id
                name
            }
            bannerImage
            coverImage {
                medium
                large
                extraLarge
                color
            }
            title {
                romaji
                english
                native
            }
        }
    }
}
'''
