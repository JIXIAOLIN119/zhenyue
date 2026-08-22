/**
* | output |
* | --- |
* | "Switch version" |
*
* @param {Switch_VersionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const switch_version: ((inputs?: Switch_VersionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Switch_VersionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Switch_VersionInputs = {};
