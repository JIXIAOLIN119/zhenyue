/**
* | output |
* | --- |
* | "is not empty" |
*
* @param {Operator_Is_Not_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_not_empty: ((inputs?: Operator_Is_Not_EmptyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Operator_Is_Not_EmptyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Operator_Is_Not_EmptyInputs = {};
