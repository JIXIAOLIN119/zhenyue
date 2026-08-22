/**
* | output |
* | --- |
* | "contains" |
*
* @param {Operator_ContainsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_contains: ((inputs?: Operator_ContainsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Operator_ContainsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Operator_ContainsInputs = {};
