/**
* | output |
* | --- |
* | "Remove from context" |
*
* @param {Remove_From_ContextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_from_context: ((inputs?: Remove_From_ContextInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Remove_From_ContextInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Remove_From_ContextInputs = {};
