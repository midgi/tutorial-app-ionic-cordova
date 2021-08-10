var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var MathCalculatorOriginal = /** @class */ (function (_super) {
    __extends(MathCalculatorOriginal, _super);
    function MathCalculatorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MathCalculatorOriginal.prototype.add = function (arg0) { return cordova(this, "add", {}, arguments); };
    MathCalculatorOriginal.prototype.substract = function (arg0) { return cordova(this, "substract", {}, arguments); };
    MathCalculatorOriginal.pluginName = "MathCalculator";
    MathCalculatorOriginal.plugin = "cordova-plugin-mathcalculator";
    MathCalculatorOriginal.pluginRef = "window.plugins.mathcalculator";
    MathCalculatorOriginal.repo = "https://github.com/midgi/cordova-plugin-mathcalculator.git";
    MathCalculatorOriginal.install = "";
    MathCalculatorOriginal.installVariables = [];
    MathCalculatorOriginal.platforms = ["Android"];
    return MathCalculatorOriginal;
}(IonicNativePlugin));
var MathCalculator = new MathCalculatorOriginal();
export { MathCalculator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21hdGgtY2FsY3VsYXRvci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUFrQ3hGLGtDQUFpQjs7OztJQVNuRCw0QkFBRyxhQUFDLElBQVM7SUFLYixrQ0FBUyxhQUFDLElBQVM7Ozs7Ozs7O3lCQTVEckI7RUE4Q29DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgTWF0aCBDYWxjdWxhdG9yXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNYXRoQ2FsY3VsYXRvciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWF0aC1jYWxjdWxhdG9yJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtYXRoQ2FsY3VsYXRvcjogTWF0aENhbGN1bGF0b3IpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLm1hdGhDYWxjdWxhdG9yLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWF0aENhbGN1bGF0b3InLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tYXRoY2FsY3VsYXRvcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy5tYXRoY2FsY3VsYXRvcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taWRnaS9jb3Jkb3ZhLXBsdWdpbi1tYXRoY2FsY3VsYXRvci5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hdGhDYWxjdWxhdG9yIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcxIHtzdHJpbmd9IFNvbWUgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMiB7bnVtYmVyfSBBbm90aGVyIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkKGFyZzA6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3Vic3RyYWN0KGFyZzA6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxufVxuIl19