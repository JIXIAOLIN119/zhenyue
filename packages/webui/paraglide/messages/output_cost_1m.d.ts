/**
* | output |
* | --- |
* | "Output Cost (1M)" |
*
* @param {Output_Cost_1mInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const output_cost_1m: ((inputs?: Output_Cost_1mInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Output_Cost_1mInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Output_Cost_1mInputs = {};
