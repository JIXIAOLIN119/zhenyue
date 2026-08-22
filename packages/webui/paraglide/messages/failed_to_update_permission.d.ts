/**
* | output |
* | --- |
* | "Failed to update permission" |
*
* @param {Failed_To_Update_PermissionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_update_permission: ((inputs?: Failed_To_Update_PermissionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_Update_PermissionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_Update_PermissionInputs = {};
