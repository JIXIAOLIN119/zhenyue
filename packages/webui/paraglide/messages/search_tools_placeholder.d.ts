/**
* | output |
* | --- |
* | "Search tools by name or description..." |
*
* @param {Search_Tools_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_tools_placeholder: ((inputs?: Search_Tools_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Search_Tools_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Search_Tools_PlaceholderInputs = {};
