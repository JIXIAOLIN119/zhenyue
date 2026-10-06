/**
* | output |
* | --- |
* | "You are a member of multiple teams. Please select one to continue." |
*
* @param {Select_Team_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_team_description: ((inputs?: Select_Team_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Select_Team_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Select_Team_DescriptionInputs = {};
