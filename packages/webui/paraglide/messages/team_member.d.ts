/**
* | output |
* | --- |
* | "Team Member" |
*
* @param {Team_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const team_member: ((inputs?: Team_MemberInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Team_MemberInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Team_MemberInputs = {};
