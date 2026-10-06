/**
* | output |
* | --- |
* | "Permission" |
*
* @param {Skill_PermissionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skill_permission: ((inputs?: Skill_PermissionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Skill_PermissionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Skill_PermissionInputs = {};
