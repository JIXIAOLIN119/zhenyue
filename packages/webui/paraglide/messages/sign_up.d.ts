/**
* | output |
* | --- |
* | "Sign up" |
*
* @param {Sign_UpInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sign_up: ((inputs?: Sign_UpInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sign_UpInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sign_UpInputs = {};
