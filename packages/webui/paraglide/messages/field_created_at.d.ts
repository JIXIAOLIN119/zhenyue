/**
* | output |
* | --- |
* | "Created At" |
*
* @param {Field_Created_AtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field_created_at: ((inputs?: Field_Created_AtInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Field_Created_AtInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Field_Created_AtInputs = {};
