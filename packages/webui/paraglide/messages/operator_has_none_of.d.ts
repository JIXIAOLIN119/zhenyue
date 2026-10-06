/**
* | output |
* | --- |
* | "has none of" |
*
* @param {Operator_Has_None_OfInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_has_none_of: ((inputs?: Operator_Has_None_OfInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Operator_Has_None_OfInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Operator_Has_None_OfInputs = {};
