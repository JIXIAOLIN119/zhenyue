/**
* | output |
* | --- |
* | "Project-scoped member roles are managed within individual project settings" |
*
* @param {Project_Member_Role_TooltipInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_member_role_tooltip: ((inputs?: Project_Member_Role_TooltipInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Project_Member_Role_TooltipInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Project_Member_Role_TooltipInputs = {};
