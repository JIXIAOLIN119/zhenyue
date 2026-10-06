/**
* | output |
* | --- |
* | "Apply and Close" |
*
* @param {Apply_And_CloseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const apply_and_close: ((inputs?: Apply_And_CloseInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Apply_And_CloseInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Apply_And_CloseInputs = {};
