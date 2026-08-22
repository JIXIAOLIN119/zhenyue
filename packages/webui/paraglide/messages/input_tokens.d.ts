/**
* | output |
* | --- |
* | "Input Tokens" |
*
* @param {Input_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const input_tokens: ((inputs?: Input_TokensInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Input_TokensInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Input_TokensInputs = {};
