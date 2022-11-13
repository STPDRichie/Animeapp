from datetime import datetime


seasons_map = {
    1: 'WINTER',
    2: 'WINTER',
    3: 'SPRING',
    4: 'SPRING',
    5: 'SPRING',
    6: 'SUMMER',
    7: 'SUMMER',
    8: 'SUMMER',
    9: 'FALL',
    10: 'FALL',
    11: 'FALL',
    12: 'WINTER',
}


def get_current_season():
    month_number = int(datetime.now().strftime('%m'))
    return seasons_map[month_number]


def get_next_season():
    month_number = (int(datetime.now().strftime('%m')) + 3) % 12
    return seasons_map[month_number] if month_number != 0 else seasons_map[1]


def get_current_year():
    return int(datetime.now().strftime('%Y'))


def get_next_year():
    return int(datetime.now().strftime('%Y')) + 1


def get_page_title_this_season():
    return f'{get_current_season().lower().capitalize()} {get_current_year()} Anime'


def get_page_title_next_season():
    if (int(datetime.now().strftime('%m')) + 3) % 12 < int(datetime.now().strftime('%m')) % 12:
        return f'Anime Next Season — Airing {get_next_season().lower().capitalize()} {get_next_year()}'
    return f'Anime Next Season — Airing {get_next_season().lower().capitalize()} {get_current_year()}'


variables_by_list_map = {
    'trending': {
        'sort': 'TRENDING_DESC'
    },
    'season': {
        'season': get_current_season(),
        'seasonYear': get_current_year(),
        'sort': 'POPULARITY_DESC'
    },
    'nextSeason': {
        'season': get_next_season(),
        'seasonYear': get_next_year(),
        'sort': 'POPULARITY_DESC'
    },
    'popular': {
        'sort': 'POPULARITY_DESC'
    },
    'top': {
        'sort': 'SCORE_DESC'
    }
}

additional_response_map = {
    'trending': {
        'pageTitle': 'Trending Anime'
    },
    'season': {
        'pageTitle': get_page_title_this_season()
    },
    'nextSeason': {
        'pageTitle': get_page_title_next_season()
    },
    'popular': {
        'pageTitle': 'Popular Anime'
    },
    'top': {
        'pageTitle': 'Top Anime'
    },
}


def get_anime_list_variables(list_name, page_number):
    variables = variables_by_list_map[list_name]
    variables['page'] = page_number
    return variables


def get_additional_response(list_name):
    return additional_response_map[list_name]
