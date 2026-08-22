/**
* | output |
* | --- |
* | "Customize Team Member Role" |
*
* @param {Add_Team_Member_To_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_team_member_to_project: ((inputs?: Add_Team_Member_To_ProjectInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_Team_Member_To_ProjectInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_Team_Member_To_ProjectInputs = {};
