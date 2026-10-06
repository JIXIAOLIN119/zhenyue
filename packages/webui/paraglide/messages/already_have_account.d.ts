/**
* | output |
* | --- |
* | "Already have an account?" |
*
* @param {Already_Have_AccountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const already_have_account: ((inputs?: Already_Have_AccountInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Already_Have_AccountInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Already_Have_AccountInputs = {};
