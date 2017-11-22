/**
 * 操作超时异常对象.
 * 
 * @export
 * @class TimeoutError
 */
export class TimeoutError {

    /**
     * Creates an instance of TimeoutError.
     * 
     * @param {number} ms 超时时间(毫秒)
     * @param {string} [message] 
     * @memberof TimeoutError
     */
    constructor(public ms: number, message?: string) {
        this.message = message != null ? message : `the operation has timed out after ${ms} milliseconds.`;
    }

    message: string;
}