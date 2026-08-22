/**
* | output |
* | --- |
* | "Yesterday" |
*
* @param {YesterdayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const yesterday: ((inputs?: YesterdayInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<YesterdayInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type YesterdayInputs = {};
