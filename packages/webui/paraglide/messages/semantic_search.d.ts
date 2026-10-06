/**
* | output |
* | --- |
* | "Semantic Search" |
*
* @param {Semantic_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const semantic_search: ((inputs?: Semantic_SearchInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Semantic_SearchInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Semantic_SearchInputs = {};
