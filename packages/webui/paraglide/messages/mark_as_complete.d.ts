/**
* | output |
* | --- |
* | "Mark as complete" |
*
* @param {Mark_As_CompleteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mark_as_complete: ((inputs?: Mark_As_CompleteInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mark_As_CompleteInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mark_As_CompleteInputs = {};
