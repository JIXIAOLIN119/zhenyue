/**
* | output |
* | --- |
* | "Create new version" |
*
* @param {Create_New_VersionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_new_version: ((inputs?: Create_New_VersionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Create_New_VersionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Create_New_VersionInputs = {};
