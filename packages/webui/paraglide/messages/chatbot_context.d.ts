/**
* | output |
* | --- |
* | "Chatbot Context" |
*
* @param {Chatbot_ContextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const chatbot_context: ((inputs?: Chatbot_ContextInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Chatbot_ContextInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Chatbot_ContextInputs = {};
