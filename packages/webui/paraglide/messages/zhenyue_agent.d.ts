/**
* | output |
* | --- |
* | "ZhenYue Agent" |
*
* @param {Zhenyue_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const zhenyue_agent: ((inputs?: Zhenyue_AgentInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Zhenyue_AgentInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Zhenyue_AgentInputs = {};
