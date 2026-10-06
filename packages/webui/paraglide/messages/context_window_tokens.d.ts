/**
* | output |
* | --- |
* | "Context Window (tokens)" |
*
* @param {Context_Window_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const context_window_tokens: ((inputs?: Context_Window_TokensInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Context_Window_TokensInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Context_Window_TokensInputs = {};
