export function isObjectEmpty(value: any) {
    if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(value).length === 0;
    } else {
        var k;
        for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
                return false;
            }
        }
        return true;
    }
}
