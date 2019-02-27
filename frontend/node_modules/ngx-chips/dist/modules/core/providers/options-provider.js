var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { defaults } from '../../defaults';
var OptionsProvider = (function () {
    function OptionsProvider() {
    }
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = __assign({}, defaults.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = __assign({}, defaults.dropdown, options.dropdown);
    };
    return OptionsProvider;
}());
export { OptionsProvider };
OptionsProvider.defaults = defaults;
//# sourceMappingURL=options-provider.js.map