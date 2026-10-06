/**
* | output |
* | --- |
* | "Version removed from stack" |
*
* @param {Version_Removed_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const version_removed_successfully: ((inputs?: Version_Removed_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Version_Removed_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Version_Removed_SuccessfullyInputs = {};
