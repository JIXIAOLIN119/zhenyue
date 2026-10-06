/**
* | output |
* | --- |
* | "reply to: {message}" |
*
* @param {Reply_To_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reply_to_message: ((inputs: Reply_To_MessageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Reply_To_MessageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Reply_To_MessageInputs = {
    message: NonNullable<unknown>;
};
