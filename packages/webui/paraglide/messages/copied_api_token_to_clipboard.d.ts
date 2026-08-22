/**
* | output |
* | --- |
* | "Copied API token to clipboard" |
*
* @param {Copied_Api_Token_To_ClipboardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copied_api_token_to_clipboard: ((inputs?: Copied_Api_Token_To_ClipboardInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Copied_Api_Token_To_ClipboardInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Copied_Api_Token_To_ClipboardInputs = {};
