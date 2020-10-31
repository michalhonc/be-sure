export function isFunction(value: any) {
    return (
        (typeof Function !== 'undefined' && value instanceof Function) ||
        Object.prototype.toString.call(value) === '[object Function]'
    );
}
