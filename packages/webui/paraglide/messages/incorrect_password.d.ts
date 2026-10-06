/**
* | output |
* | --- |
* | "Incorrect password. Please try again." |
*
* @param {Incorrect_PasswordInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const incorrect_password: ((inputs?: Incorrect_PasswordInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Incorrect_PasswordInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Incorrect_PasswordInputs = {};
