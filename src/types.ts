import {CreateClientParams} from 'nightwatch';
import type {JSDOMOptions} from 'vitest';

declare module 'vitest' {
    interface EnvironmentOptions {
        /**
        * jsdom options.
        */
        jsdom?: JSDOMOptions;
        nightwatch?: Partial<CreateClientParams>;
        [x: string]: unknown;
    }
}
