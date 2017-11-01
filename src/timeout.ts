import { TimeoutError } from './timeout-error';

/**
 * 设置操作的超时时间, 超时后将引发`TimeoutError`异常.
 * 
 * @export
 * @template T 
 * @param {Promise<T>} p 
 * @param {number} ms 
 * @returns 
 */
export async function timeout<T>(p: Promise<T>, ms: number) {

    let time = new Promise<void>((resolveFn, rejectFn) => {
        setTimeout(() => { rejectFn(new TimeoutError(ms)); }, ms);
    });

    return (await Promise.race([p, time])) as T;
}