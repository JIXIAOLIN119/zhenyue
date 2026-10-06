/**
* | output |
* | --- |
* | "Owner Only" |
*
* @param {Permission_Owner_OnlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const permission_owner_only: ((inputs?: Permission_Owner_OnlyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Permission_Owner_OnlyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Permission_Owner_OnlyInputs = {};
