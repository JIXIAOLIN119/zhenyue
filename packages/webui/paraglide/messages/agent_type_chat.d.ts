/**
* | output |
* | --- |
* | "Chat" |
*
* @param {Agent_Type_ChatInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_type_chat: ((inputs?: Agent_Type_ChatInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Type_ChatInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Type_ChatInputs = {};
