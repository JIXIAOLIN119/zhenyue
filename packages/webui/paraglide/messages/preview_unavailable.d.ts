/**
* | output |
* | --- |
* | "Preview unavailable" |
*
* @param {Preview_UnavailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preview_unavailable: ((inputs?: Preview_UnavailableInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Preview_UnavailableInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Preview_UnavailableInputs = {};
