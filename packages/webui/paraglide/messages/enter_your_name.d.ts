/**
* | output |
* | --- |
* | "Enter your name" |
*
* @param {Enter_Your_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_your_name: ((inputs?: Enter_Your_NameInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Enter_Your_NameInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Enter_Your_NameInputs = {};
