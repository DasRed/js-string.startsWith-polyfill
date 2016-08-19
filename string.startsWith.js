'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return root.String.prototype.startsWith = factory(root.String.prototype);
        });

    } else if (typeof exports !== 'undefined') {
        root.String.prototype.startsWith = factory(root.String.prototype);

    } else {
        root.String.prototype.startsWith = factory(root.String.prototype);
    }
}(this, function (StringPrototype) {
    if (StringPrototype.startsWith !== undefined) {
        return StringPrototype.startsWith;
    }

    return function(searchString, position){
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}));
