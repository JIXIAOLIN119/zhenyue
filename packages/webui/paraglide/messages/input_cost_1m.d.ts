/**
* | output |
* | --- |
* | "Input Cost (1M)" |
*
* @param {Input_Cost_1mInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const input_cost_1m: ((inputs?: Input_Cost_1mInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Input_Cost_1mInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Input_Cost_1mInputs = {};
