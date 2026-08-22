/**
* | output |
* | --- |
* | "Password is required" |
*
* @param {Password_Is_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const password_is_required: ((inputs?: Password_Is_RequiredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Password_Is_RequiredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Password_Is_RequiredInputs = {};
