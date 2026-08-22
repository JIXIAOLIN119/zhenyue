/**
* | output |
* | --- |
* | "Show Chatbot" |
*
* @param {Show_ChatbotInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const show_chatbot: ((inputs?: Show_ChatbotInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Show_ChatbotInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Show_ChatbotInputs = {};
