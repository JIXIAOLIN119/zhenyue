/**
* | output |
* | --- |
* | "Global Chatbot" |
*
* @param {Global_ChatbotInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const global_chatbot: ((inputs?: Global_ChatbotInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Global_ChatbotInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Global_ChatbotInputs = {};
