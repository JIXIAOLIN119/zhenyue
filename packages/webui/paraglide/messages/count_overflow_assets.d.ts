/**
* | output |
* | --- |
* | "10000+ Assets" |
*
* @param {Count_Overflow_AssetsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const count_overflow_assets: ((inputs?: Count_Overflow_AssetsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Count_Overflow_AssetsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Count_Overflow_AssetsInputs = {};
