/**
* | output |
* | --- |
* | "Agent Soul (Personality)" |
*
* @param {Agent_SoulInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_soul: ((inputs?: Agent_SoulInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_SoulInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_SoulInputs = {};
