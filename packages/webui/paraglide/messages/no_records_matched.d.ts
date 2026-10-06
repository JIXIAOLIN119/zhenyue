/**
* | output |
* | --- |
* | "No records matched your criteria" |
*
* @param {No_Records_MatchedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_records_matched: ((inputs?: No_Records_MatchedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Records_MatchedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Records_MatchedInputs = {};
