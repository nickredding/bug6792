'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorCookieData = core.registerPlugin('CapacitorCookieData', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorCookieDataWeb()),
});

class CapacitorCookieDataWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorCookieDataWeb: CapacitorCookieDataWeb
});

exports.CapacitorCookieData = CapacitorCookieData;
//# sourceMappingURL=plugin.cjs.js.map
