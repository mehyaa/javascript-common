export function normalizeError(catched) {
    if (catched instanceof Error) {
        return catched;
    }

    if (typeof catched === 'string') {
        return new Error(catched);
    }

    let message = catched && catched.toString();

    if (!message) {
        message = 'Unknown error occured.';
    }

    return new Error(message);
}

export function cloneError(err) {
    const error = new Error(err.message);

    error.name = err.name;
    error.stack = err.stack;

    for (const key in err) {
        if (err.hasOwnProperty(key)) {
            error[key] = err[key];
        }
    }

    return error;
}