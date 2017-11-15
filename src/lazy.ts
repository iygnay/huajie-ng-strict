
/**
 * 延迟加载对象
 * 
 * @export
 * @class Lazy
 * @template T 
 */
export class Lazy<T> {
    private _fn: () => T;
    private _loaded = false;
    private _value: T;

    constructor(fn: () => T) {
        this._fn = fn;
    }

    get value() {
        if (!this._loaded) {
            this._value = this._fn();
            this._loaded = true;
        }
        return this._value;
    }
}