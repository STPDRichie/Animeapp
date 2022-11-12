export function changeMediaInLists(lists, status, mediaId) {
    for (const list of lists) {
        const mediaIndex = list.entities.findIndex(
            (anime) => anime.id === mediaId,
        );
        if (mediaIndex !== -1) {
            list.entities[mediaIndex] = {
                ...list.entities[mediaIndex],
                mediaListEntry: {
                    ...list.entities[mediaIndex].mediaListEntry,
                    status,
                },
            };
        }
    }
    return lists;
}
