/**
* | output |
* | --- |
* | "Read-only" |
*
* @param {Read_OnlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const read_only: ((inputs?: Read_OnlyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Read_OnlyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Read_OnlyInputs = {};
