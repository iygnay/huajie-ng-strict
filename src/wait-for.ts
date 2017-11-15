import { TimeoutError } from './timeout-error';

/**
 * 等待指定条件完成.
 * 
 * @export
 * @param {() => boolean} fn 
 * @param {number} timeoutMs 
 * @param {number} [intervalMs=100] 
 * @returns 
 */
export function waitFor(fn: () => boolean, timeoutMs: number, intervalMs: number = 100) {
    let b = fn();
    if (b) {
        return Promise.resolve<void>(null);
    }

    let i = 1;
    let max = timeoutMs / intervalMs;
    return new Promise<void>((resolveFn, rejectFn) => {
        let timer = setInterval(() => {
            let r = fn();

            if (r) {
                clearInterval(timer);
                resolveFn();
            } else if (i >= max) {
                clearInterval(timer);
                rejectFn(new TimeoutError(timeoutMs));
            }

            ++i;
        }, intervalMs);
    });
}