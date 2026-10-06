/**
* | output |
* | --- |
* | "Preview Background" |
*
* @param {Preview_BackdropInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preview_backdrop: ((inputs?: Preview_BackdropInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Preview_BackdropInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Preview_BackdropInputs = {};
