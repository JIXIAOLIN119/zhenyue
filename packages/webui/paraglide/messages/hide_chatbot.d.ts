/**
* | output |
* | --- |
* | "Hide Chatbot" |
*
* @param {Hide_ChatbotInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const hide_chatbot: ((inputs?: Hide_ChatbotInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Hide_ChatbotInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Hide_ChatbotInputs = {};
