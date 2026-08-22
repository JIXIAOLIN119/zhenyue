/**
* | output |
* | --- |
* | "All Users" |
*
* @param {Permission_All_UsersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const permission_all_users: ((inputs?: Permission_All_UsersInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Permission_All_UsersInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Permission_All_UsersInputs = {};
