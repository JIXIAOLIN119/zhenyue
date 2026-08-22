/**
* | output |
* | --- |
* | "Chat" |
*
* @param {Session_Type_ChatInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const session_type_chat: ((inputs?: Session_Type_ChatInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Session_Type_ChatInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Session_Type_ChatInputs = {};
