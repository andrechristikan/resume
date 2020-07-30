/** Makes a string harder to read. */
declare global {
    namespace NodeJS {
        interface Global {
            config: Function;
            trans: Function;
            env: Function;
            logger: any;
            getVersion: Function;
            getError: Function;
            APIError: Object;
            Enum: {
                HttpErrorStatusCode: object;
                SystemErrorCode: object;
            };
        }
    }
}

export {};
