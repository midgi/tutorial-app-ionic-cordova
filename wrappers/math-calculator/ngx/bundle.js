'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var MathCalculator = /** @class */ (function (_super) {
    tslib.__extends(MathCalculator, _super);
    function MathCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MathCalculator.prototype.add = function (arg0) { return core.cordova(this, "add", {}, arguments); };
    MathCalculator.prototype.substract = function (arg0) { return core.cordova(this, "substract", {}, arguments); };
    MathCalculator.pluginName = "MathCalculator";
    MathCalculator.plugin = "cordova-plugin-mathcalculator";
    MathCalculator.pluginRef = "window.plugins.mathcalculator";
    MathCalculator.repo = "https://github.com/midgi/cordova-plugin-mathcalculator.git";
    MathCalculator.install = "";
    MathCalculator.installVariables = [];
    MathCalculator.platforms = ["Android"];
    MathCalculator.decorators = [
        { type: core$1.Injectable }
    ];
    return MathCalculator;
}(core.IonicNativePlugin));

exports.MathCalculator = MathCalculator;
