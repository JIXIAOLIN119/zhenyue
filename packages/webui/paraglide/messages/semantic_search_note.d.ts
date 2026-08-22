/**
* | output |
* | --- |
* | "Semantic search results will be ordered by their relevance to the search query text, but won't be strictly filtered. If you need accurate filtering, please a..." |
*
* @param {Semantic_Search_NoteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const semantic_search_note: ((inputs?: Semantic_Search_NoteInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Semantic_Search_NoteInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Semantic_Search_NoteInputs = {};
