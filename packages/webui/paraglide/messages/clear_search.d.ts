/**
* | output |
* | --- |
* | "Clear search" |
*
* @param {Clear_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const clear_search: ((inputs?: Clear_SearchInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Clear_SearchInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Clear_SearchInputs = {};
