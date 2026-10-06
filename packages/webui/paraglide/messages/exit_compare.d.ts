/**
* | output |
* | --- |
* | "Exit compare" |
*
* @param {Exit_CompareInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const exit_compare: ((inputs?: Exit_CompareInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Exit_CompareInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Exit_CompareInputs = {};
