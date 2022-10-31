export const isFunction = (func) => {
    if (func && typeof func === 'function') {
        return true;
    }
    return false;
};
