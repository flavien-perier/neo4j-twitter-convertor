"use strict";

// (:User)-[]->(:Location)

module.exports = class Localised {
    constructor(from, to) {
        this._from = from;
        this._to = to;
        this._type = 'Localised';
    }

    toString() {
        return `{}`;
    }
}