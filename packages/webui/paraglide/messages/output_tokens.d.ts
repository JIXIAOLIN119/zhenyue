/**
* | output |
* | --- |
* | "Output Tokens" |
*
* @param {Output_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const output_tokens: ((inputs?: Output_TokensInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Output_TokensInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Output_TokensInputs = {};
