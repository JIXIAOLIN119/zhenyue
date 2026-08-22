/**
* | output |
* | --- |
* | "Unchecked" |
*
* @param {Toggle_UncheckedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const toggle_unchecked: ((inputs?: Toggle_UncheckedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Toggle_UncheckedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Toggle_UncheckedInputs = {};
