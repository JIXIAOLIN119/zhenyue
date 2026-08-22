/**
* | output |
* | --- |
* | "Semantic search using media intelligence might be slow..." |
*
* @param {Semantic_Search_SlowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const semantic_search_slow: ((inputs?: Semantic_Search_SlowInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Semantic_Search_SlowInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Semantic_Search_SlowInputs = {};
