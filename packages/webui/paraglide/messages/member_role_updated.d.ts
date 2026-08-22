/**
* | output |
* | --- |
* | "Member role updated" |
*
* @param {Member_Role_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const member_role_updated: ((inputs?: Member_Role_UpdatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Member_Role_UpdatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Member_Role_UpdatedInputs = {};
