/**
* | output |
* | --- |
* | "Select the agent that handles conversation inside the global chatbot sidebar." |
*
* @param {Global_Chatbot_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const global_chatbot_description: ((inputs?: Global_Chatbot_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Global_Chatbot_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Global_Chatbot_DescriptionInputs = {};
