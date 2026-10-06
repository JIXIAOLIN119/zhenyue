/**
* | output |
* | --- |
* | "Search providers..." |
*
* @param {Search_Providers_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_providers_placeholder: ((inputs?: Search_Providers_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Search_Providers_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Search_Providers_PlaceholderInputs = {};
