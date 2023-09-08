var capacitorCapacitorCookieData = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
