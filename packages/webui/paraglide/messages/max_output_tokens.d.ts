/**
* | output |
* | --- |
* | "Max Output Tokens" |
*
* @param {Max_Output_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const max_output_tokens: ((inputs?: Max_Output_TokensInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Max_Output_TokensInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Max_Output_TokensInputs = {};
