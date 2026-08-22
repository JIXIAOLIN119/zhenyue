/**
* | output |
* | --- |
* | "No chat history found." |
*
* @param {No_History_SessionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_history_sessions: ((inputs?: No_History_SessionsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_History_SessionsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_History_SessionsInputs = {};
