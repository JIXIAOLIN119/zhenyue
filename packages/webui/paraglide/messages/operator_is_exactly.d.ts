/**
* | output |
* | --- |
* | "is exactly" |
*
* @param {Operator_Is_ExactlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_exactly: ((inputs?: Operator_Is_ExactlyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Operator_Is_ExactlyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Operator_Is_ExactlyInputs = {};
