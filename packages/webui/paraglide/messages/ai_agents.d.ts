/**
* | output |
* | --- |
* | "AI Agents" |
*
* @param {Ai_AgentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_agents: ((inputs?: Ai_AgentsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Ai_AgentsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Ai_AgentsInputs = {};
