/**
* | output |
* | --- |
* | "Drag and drop files or folders here to add them to chatbot context" |
*
* @param {Chatbot_Drag_Drop_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const chatbot_drag_drop_hint: ((inputs?: Chatbot_Drag_Drop_HintInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Chatbot_Drag_Drop_HintInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Chatbot_Drag_Drop_HintInputs = {};
