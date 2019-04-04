const defaultCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function generateUniqueId(length, charSet) {
    charSet = charSet || defaultCharSet;

    let result = '';

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * charSet.length);

        result += charSet.substring(index, index + 1);
    }

    return result;
}