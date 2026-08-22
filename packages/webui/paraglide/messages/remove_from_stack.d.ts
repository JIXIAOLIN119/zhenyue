/**
* | output |
* | --- |
* | "Remove from stack" |
*
* @param {Remove_From_StackInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_from_stack: ((inputs?: Remove_From_StackInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Remove_From_StackInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Remove_From_StackInputs = {};
