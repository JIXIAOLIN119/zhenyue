/**
* | output |
* | --- |
* | "简体中文 (Chinese)" |
*
* @param {ChineseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const chinese: ((inputs?: ChineseInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<ChineseInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type ChineseInputs = {};
