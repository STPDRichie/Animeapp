export function changeMediaInLists(lists, media) {
    for (const list of lists) {
        const mediaIndex = list.entities.findIndex(
            (anime) => anime.id === media.mediaId,
        );
        if (mediaIndex !== -1) {
            list.entities[mediaIndex] = {
                ...list.entities[mediaIndex],
                mediaListEntry: {
                    ...media,
                },
            };
        }
    }
    return lists;
}
