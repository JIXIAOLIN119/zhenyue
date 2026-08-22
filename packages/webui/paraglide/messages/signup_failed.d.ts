/**
* | output |
* | --- |
* | "Signup failed" |
*
* @param {Signup_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const signup_failed: ((inputs?: Signup_FailedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Signup_FailedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Signup_FailedInputs = {};
