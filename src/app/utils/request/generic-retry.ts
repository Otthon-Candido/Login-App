import { Observable, throwError, timer } from "rxjs";
import { finalize, mergeMap } from "rxjs/operators";

export const genericRetryStrategy = ({
    maxRetryAttempts = 2,
    scalingDuration = 1000,
    excludedStatusCodes = [400, 401, 404, 409, 413]
}: {
    maxRetryAttempts?: number,
    scalingDuration?: number,
    excludedStatusCodes?: number[]
} = {}) => (attempts: Observable<any>) => {
    return attempts.pipe(
        mergeMap((error, i) => {
            const retryAttempt = i + 1;
            if (
                retryAttempt > maxRetryAttempts ||
                excludedStatusCodes.find(e => e === error.status)
            ) {
                return throwError(() => error);
            }
            return timer(retryAttempt * scalingDuration);
        }),
        finalize(() => { })
    );
};