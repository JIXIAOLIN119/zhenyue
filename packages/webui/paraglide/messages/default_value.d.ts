/**
* | output |
* | --- |
* | "Default Value" |
*
* @param {Default_ValueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const default_value: ((inputs?: Default_ValueInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Default_ValueInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Default_ValueInputs = {};
