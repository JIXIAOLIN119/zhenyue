/**
* | output |
* | --- |
* | "Personal Info" |
*
* @param {Personal_InfoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const personal_info: ((inputs?: Personal_InfoInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Personal_InfoInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Personal_InfoInputs = {};
