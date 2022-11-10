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
