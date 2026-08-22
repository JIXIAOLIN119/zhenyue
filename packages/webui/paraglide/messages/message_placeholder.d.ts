/**
* | output |
* | --- |
* | "Message..." |
*
* @param {Message_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const message_placeholder: ((inputs?: Message_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Message_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Message_PlaceholderInputs = {};
