const _ = require('lodash');

function parse(objectToParse) {
    for (let singleKey in objectToParse) {
        if (objectToParse.hasOwnProperty(singleKey)) {
            let ans;
            if (_.isArray(objectToParse[singleKey])) {

                ans = _handleArray(objectToParse[singleKey]);
            } else if (_.isString(objectToParse[singleKey])) {

                ans = _handleString(objectToParse[singleKey]);

                objectToParse[singleKey] = ans;
            } else if (_.isObject(objectToParse[singleKey])) {

                ans = _handleObject(objectToParse[singleKey]);
            }
        }
    }

    return objectToParse;
}


function _handleString(stringVal) {
    if (stringVal === 'true') {
        return true;
    } else if (stringVal === 'false') {
        return false;
    }

    return stringVal;
}

function _handleObject(singleObject) {
    parse(singleObject);
}

function _handleArray(arrayVal) {

    for (let i = 0; i < arrayVal.length; i ++) {
        const singleVal = arrayVal[i];
        let ans;

        if (_.isArray(singleVal)) {

            _handleArray(singleVal);
        } else if (_.isString(singleVal)) {

            ans = _handleString(singleVal);

            arrayVal[i] = ans;
        } else if (_.isObject(singleVal)) {

            _handleObject(singleVal);
        }
    }
}

module.exports = {
    parse,
    _handleString,
    _handleObject,
    _handleArray
};

