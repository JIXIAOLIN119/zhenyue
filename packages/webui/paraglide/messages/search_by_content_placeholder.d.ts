/**
* | output |
* | --- |
* | "Search records by content..." |
*
* @param {Search_By_Content_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_by_content_placeholder: ((inputs?: Search_By_Content_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Search_By_Content_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Search_By_Content_PlaceholderInputs = {};
