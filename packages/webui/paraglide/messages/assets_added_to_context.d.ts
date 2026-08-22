/**
* | output |
* | --- |
* | "Assets added to context:" |
*
* @param {Assets_Added_To_ContextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const assets_added_to_context: ((inputs?: Assets_Added_To_ContextInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Assets_Added_To_ContextInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Assets_Added_To_ContextInputs = {};
