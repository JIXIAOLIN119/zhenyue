/**
* | output |
* | --- |
* | "Match found at" |
*
* @param {Match_Found_AtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const match_found_at: ((inputs?: Match_Found_AtInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Match_Found_AtInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Match_Found_AtInputs = {};
