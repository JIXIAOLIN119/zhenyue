/**
* | output |
* | --- |
* | "Optional default value..." |
*
* @param {Optional_Default_Value_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const optional_default_value_placeholder: ((inputs?: Optional_Default_Value_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Optional_Default_Value_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Optional_Default_Value_PlaceholderInputs = {};
