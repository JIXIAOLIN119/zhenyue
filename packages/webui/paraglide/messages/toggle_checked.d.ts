/**
* | output |
* | --- |
* | "Checked" |
*
* @param {Toggle_CheckedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const toggle_checked: ((inputs?: Toggle_CheckedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Toggle_CheckedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Toggle_CheckedInputs = {};
