/**
* | output |
* | --- |
* | "Search options..." |
*
* @param {Search_Options_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_options_placeholder: ((inputs?: Search_Options_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Search_Options_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Search_Options_PlaceholderInputs = {};
