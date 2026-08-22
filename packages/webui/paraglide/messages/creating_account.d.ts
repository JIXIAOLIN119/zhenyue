/**
* | output |
* | --- |
* | "Creating account..." |
*
* @param {Creating_AccountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const creating_account: ((inputs?: Creating_AccountInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Creating_AccountInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Creating_AccountInputs = {};
