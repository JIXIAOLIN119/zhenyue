/**
* | output |
* | --- |
* | "e.g. My CLI token" |
*
* @param {Token_Name_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const token_name_placeholder: ((inputs?: Token_Name_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Token_Name_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Token_Name_PlaceholderInputs = {};
