/**
* | output |
* | --- |
* | "Skills Management" |
*
* @param {Skills_ManagementInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skills_management: ((inputs?: Skills_ManagementInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Skills_ManagementInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Skills_ManagementInputs = {};
