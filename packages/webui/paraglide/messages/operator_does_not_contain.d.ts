/**
* | output |
* | --- |
* | "does not contain" |
*
* @param {Operator_Does_Not_ContainInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_does_not_contain: ((inputs?: Operator_Does_Not_ContainInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Operator_Does_Not_ContainInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Operator_Does_Not_ContainInputs = {};
