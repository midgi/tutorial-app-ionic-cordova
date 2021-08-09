import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Math Calculator
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { MathCalculator } from '@ionic-native/math-calculator';
 *
 *
 * constructor(private mathCalculator: MathCalculator) { }
 *
 * ...
 *
 *
 * this.mathCalculator.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class MathCalculatorOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    add(arg0: any): Promise<any>;
    substract(arg0: any): Promise<any>;
}

export declare const MathCalculator: MathCalculatorOriginal;