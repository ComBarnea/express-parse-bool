declare interface expressBodyParserOptions {
    query?: boolean;
    body?: boolean;
}

declare function expressBodyParser(options?: expressBodyParserOptions);


export = expressBodyParser;
