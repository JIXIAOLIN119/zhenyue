/**
* | output |
* | --- |
* | "* Semantic search requires an enabled embedding agent." |
*
* @param {Semantic_Search_Requires_EmbeddingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const semantic_search_requires_embedding: ((inputs?: Semantic_Search_Requires_EmbeddingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Semantic_Search_Requires_EmbeddingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Semantic_Search_Requires_EmbeddingInputs = {};
