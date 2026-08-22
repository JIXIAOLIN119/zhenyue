/**
* | output |
* | --- |
* | "is not" |
*
* @param {Operator_Is_NotInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_not: ((inputs?: Operator_Is_NotInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Operator_Is_NotInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Operator_Is_NotInputs = {};
