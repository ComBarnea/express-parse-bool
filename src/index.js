const parse = require('./parser').parse;

/**
 * @typedef {Object} ParserInit
 * @property {Boolean} [query] - default is true
 * @property {Boolean} [body] - default is true
 */

/**
 *
 * @param options {ParserInit}
 * @return {Function}
 */

function initParser(options = {body: true, query: true}) {
    return function(req, res, next) {

        if (options.query) req.query = parse(req.query);
        if (options.body) req.body = parse(req.body);

        next();
    };
}


module.exports = initParser;
