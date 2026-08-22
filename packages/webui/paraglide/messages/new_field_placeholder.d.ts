/**
* | output |
* | --- |
* | "New Field" |
*
* @param {New_Field_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const new_field_placeholder: ((inputs?: New_Field_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<New_Field_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type New_Field_PlaceholderInputs = {};
