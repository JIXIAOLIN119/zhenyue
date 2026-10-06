/**
* | output |
* | --- |
* | "Team Attributes" |
*
* @param {Team_AttributesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team_attributes: ((inputs?: Team_AttributesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Team_AttributesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Team_AttributesInputs = {};
