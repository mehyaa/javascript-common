const cache = {};

export function getData(key) {
    return cache[key];
}

export function setData(key, data, ttl) {
    if (!(ttl > 0)) {
        ttl = 10000;
    }

    cache[key] = data;

    setTimeout(() => {
        delete cache[key];
    }, ttl);
}