/**
* | output |
* | --- |
* | "Autofill Agent" |
*
* @param {Autofill_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_agent: ((inputs?: Autofill_AgentInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Autofill_AgentInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Autofill_AgentInputs = {};
