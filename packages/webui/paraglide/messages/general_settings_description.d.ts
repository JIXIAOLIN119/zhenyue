/**
* | output |
* | --- |
* | "View your personal information and team role." |
*
* @param {General_Settings_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const general_settings_description: ((inputs?: General_Settings_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<General_Settings_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type General_Settings_DescriptionInputs = {};
