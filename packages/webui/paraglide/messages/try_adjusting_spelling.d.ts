/**
* | output |
* | --- |
* | "Try adjusting spelling or removing filter rows." |
*
* @param {Try_Adjusting_SpellingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const try_adjusting_spelling: ((inputs?: Try_Adjusting_SpellingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Try_Adjusting_SpellingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Try_Adjusting_SpellingInputs = {};
