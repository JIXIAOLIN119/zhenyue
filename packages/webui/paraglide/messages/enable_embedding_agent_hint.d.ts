/**
* | output |
* | --- |
* | "Please create and enable an embedding agent in the team settings to use semantic search." |
*
* @param {Enable_Embedding_Agent_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enable_embedding_agent_hint: ((inputs?: Enable_Embedding_Agent_HintInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Enable_Embedding_Agent_HintInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Enable_Embedding_Agent_HintInputs = {};
