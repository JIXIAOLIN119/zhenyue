/**
* | output |
* | --- |
* | "All downloads initiated successfully" |
*
* @param {All_Downloads_InitiatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_downloads_initiated: ((inputs?: All_Downloads_InitiatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<All_Downloads_InitiatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type All_Downloads_InitiatedInputs = {};
