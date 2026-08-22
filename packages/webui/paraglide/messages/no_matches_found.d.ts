/**
* | output |
* | --- |
* | "No matches found" |
*
* @param {No_Matches_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_matches_found: ((inputs?: No_Matches_FoundInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Matches_FoundInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Matches_FoundInputs = {};
