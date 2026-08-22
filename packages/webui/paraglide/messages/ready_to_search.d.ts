/**
* | output |
* | --- |
* | "Ready to Search" |
*
* @param {Ready_To_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ready_to_search: ((inputs?: Ready_To_SearchInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Ready_To_SearchInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Ready_To_SearchInputs = {};
