/**
* | output |
* | --- |
* | "Optional, used for AI autofill" |
*
* @param {Description_Optional_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const description_optional_placeholder: ((inputs?: Description_Optional_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Description_Optional_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Description_Optional_PlaceholderInputs = {};
