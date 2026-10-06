/**
* | output |
* | --- |
* | "Password Protected" |
*
* @param {Password_ProtectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const password_protected: ((inputs?: Password_ProtectedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Password_ProtectedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Password_ProtectedInputs = {};
