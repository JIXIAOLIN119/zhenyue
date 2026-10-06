/**
* | output |
* | --- |
* | "Public registration is currently disabled. You will need an invite code to join this team." |
*
* @param {Registration_Disabled_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const registration_disabled_description: ((inputs?: Registration_Disabled_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Registration_Disabled_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Registration_Disabled_DescriptionInputs = {};
