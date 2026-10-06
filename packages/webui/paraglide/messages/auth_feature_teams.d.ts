/**
* | output |
* | --- |
* | "Frictionless team workspaces & secure sharing" |
*
* @param {Auth_Feature_TeamsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_feature_teams: ((inputs?: Auth_Feature_TeamsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Auth_Feature_TeamsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Auth_Feature_TeamsInputs = {};
