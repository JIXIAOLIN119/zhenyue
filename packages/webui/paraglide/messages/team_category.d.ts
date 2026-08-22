/**
* | output |
* | --- |
* | "Team" |
*
* @param {Team_CategoryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team_category: ((inputs?: Team_CategoryInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Team_CategoryInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Team_CategoryInputs = {};
