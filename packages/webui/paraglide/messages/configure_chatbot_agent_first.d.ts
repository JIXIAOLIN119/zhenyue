/**
* | output |
* | --- |
* | "Please configure a chatbot agent in team settings first." |
*
* @param {Configure_Chatbot_Agent_FirstInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configure_chatbot_agent_first: ((inputs?: Configure_Chatbot_Agent_FirstInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Configure_Chatbot_Agent_FirstInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Configure_Chatbot_Agent_FirstInputs = {};
