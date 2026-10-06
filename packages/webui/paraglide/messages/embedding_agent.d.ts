/**
* | output |
* | --- |
* | "Embedding Agent" |
*
* @param {Embedding_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const embedding_agent: ((inputs?: Embedding_AgentInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Embedding_AgentInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Embedding_AgentInputs = {};
