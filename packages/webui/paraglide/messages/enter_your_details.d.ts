/**
* | output |
* | --- |
* | "Enter your details" |
*
* @param {Enter_Your_DetailsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_your_details: ((inputs?: Enter_Your_DetailsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Enter_Your_DetailsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Enter_Your_DetailsInputs = {};
