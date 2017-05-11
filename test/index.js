import test from "tape"
const parse = require('../dist/parser').parse;

test("express-parse-bool", (t) => {
    const objectTest = {
        a: 1,
        b: '2',
        c: 'true',
        d: [1, 2, 'false'],
        e: {
            f: 3,
            g: ['false', 4],
            h: 'hello',
            i: [{j: 'this', k: 'true'}]
        }
    };

    const objectAns = {
        a: 1,
        b: '2',
        c: true,
        d: [1, 2, false],
        e: {
            f: 3,
            g: [false, 4],
            h: 'hello',
            i: [{j: 'this', k: true}]
        }
    };

    t.plan(1);
    t.deepEqual(parse(objectTest), objectAns);
});
