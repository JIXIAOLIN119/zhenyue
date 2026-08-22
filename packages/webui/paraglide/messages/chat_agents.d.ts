/**
* | output |
* | --- |
* | "Chat Agents" |
*
* @param {Chat_AgentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const chat_agents: ((inputs?: Chat_AgentsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Chat_AgentsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Chat_AgentsInputs = {};
