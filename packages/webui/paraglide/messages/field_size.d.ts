/**
* | output |
* | --- |
* | "Size" |
*
* @param {Field_SizeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field_size: ((inputs?: Field_SizeInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Field_SizeInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Field_SizeInputs = {};
