export function changeMediaInLists(lists, media) {
    Object.keys(lists).forEach((key) => {
        const list = lists[key];
        if (list && list.entities) {
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
    });
    return lists;
}

export function deleteMediaFromLists(lists, entryId) {
    Object.keys(lists).forEach((key) => {
        const list = lists[key];
        if (list && list.entities) {
            const mediaIndex = list.entities.findIndex(
                (anime) =>
                    anime.mediaListEntry && anime.mediaListEntry.id === entryId,
            );
            if (mediaIndex !== -1) {
                list.entities[mediaIndex] = {
                    ...list.entities[mediaIndex],
                    mediaListEntry: null,
                };
            }
        }
    });
    return lists;
}
