export const isFunction = (func) => {
    if (func && typeof func === 'function') {
        return true;
    }
    return false;
};

export function makeClasses(classes) {
    if (!classes) {
        return '';
    }
    return classes.join(' ');
}

export function makeModifiers(prefix, modifiers) {
    if (!modifiers) {
        return '';
    }
    return modifiers.map((modifier) => `${prefix}--${modifier}`).join(' ');
}

export const locate = (url) => {
    window.location.href = url;
};

export function getStringDate(date) {
    if (!date) {
        return '';
    }
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var yyyy = date.getFullYear();

    return [yyyy, (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
}
