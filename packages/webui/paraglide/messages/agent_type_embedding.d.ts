/**
* | output |
* | --- |
* | "Embedding" |
*
* @param {Agent_Type_EmbeddingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_type_embedding: ((inputs?: Agent_Type_EmbeddingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Type_EmbeddingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Type_EmbeddingInputs = {};
