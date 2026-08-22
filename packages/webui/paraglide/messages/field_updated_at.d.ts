/**
* | output |
* | --- |
* | "Updated At" |
*
* @param {Field_Updated_AtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field_updated_at: ((inputs?: Field_Updated_AtInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Field_Updated_AtInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Field_Updated_AtInputs = {};
