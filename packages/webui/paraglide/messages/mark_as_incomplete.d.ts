/**
* | output |
* | --- |
* | "Mark as incomplete" |
*
* @param {Mark_As_IncompleteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mark_as_incomplete: ((inputs?: Mark_As_IncompleteInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mark_As_IncompleteInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mark_As_IncompleteInputs = {};
