populars = '''
query ($id: Int) {
    Media (id: $id, type: ANIME) {
        id
        title {
            romaji
            english
            native
        }
    }
}
'''

popular = '''
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
