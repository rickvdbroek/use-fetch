"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
exports.reducer = function (state, action) {
    switch (action.type) {
        case 'START_CALL':
            return __assign(__assign({}, state), { error: '', loading: true });
        case 'SET_SUCCESS':
            return __assign(__assign({}, state), { data: action.payload, loading: false });
        case 'SET_ERROR':
            return __assign(__assign({}, state), { error: action.payload, loading: false });
        default:
            return __assign({}, state);
    }
};
//# sourceMappingURL=index.js.map