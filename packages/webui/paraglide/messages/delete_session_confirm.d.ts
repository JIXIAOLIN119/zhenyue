/**
* | output |
* | --- |
* | "Are you sure you want to delete this chat session?" |
*
* @param {Delete_Session_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_session_confirm: ((inputs?: Delete_Session_ConfirmInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Session_ConfirmInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Session_ConfirmInputs = {};
