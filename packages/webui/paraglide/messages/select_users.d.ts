/**
* | output |
* | --- |
* | "Select Users" |
*
* @param {Select_UsersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_users: ((inputs?: Select_UsersInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Select_UsersInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Select_UsersInputs = {};
