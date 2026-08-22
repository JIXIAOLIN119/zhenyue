/**
* | output |
* | --- |
* | "Registration Disabled" |
*
* @param {Registration_DisabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const registration_disabled: ((inputs?: Registration_DisabledInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Registration_DisabledInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Registration_DisabledInputs = {};
