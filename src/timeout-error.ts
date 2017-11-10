/**
 * 操作超时异常对象.
 * 
 * @export
 * @class TimeoutError
 * @extends {Error}
 */
export class TimeoutError extends Error {

    /**
     * Creates an instance of TimeoutError.
     * 
     * @param {number} ms 超时时间(毫秒)
     * @param {string} [message] 
     * @memberof TimeoutError
     */
    constructor(public ms: number, message?: string) {
        super(message != null ? message : `the operation has timed out after ${ms} milliseconds.`);
        Object.setPrototypeOf(this, TimeoutError.prototype);
    }
}