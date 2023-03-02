import type { Nightwatch, NightwatchAPI } from 'nightwatch';
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
declare global {
    const client: Nightwatch
    const browser: NightwatchAPI
}

export {}
