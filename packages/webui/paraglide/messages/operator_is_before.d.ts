/**
* | output |
* | --- |
* | "is before" |
*
* @param {Operator_Is_BeforeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_before: ((inputs?: Operator_Is_BeforeInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Operator_Is_BeforeInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Operator_Is_BeforeInputs = {};
