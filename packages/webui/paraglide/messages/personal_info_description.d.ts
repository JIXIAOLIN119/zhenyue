/**
* | output |
* | --- |
* | "Manage your profile name and avatar image." |
*
* @param {Personal_Info_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const personal_info_description: ((inputs?: Personal_Info_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Personal_Info_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Personal_Info_DescriptionInputs = {};
