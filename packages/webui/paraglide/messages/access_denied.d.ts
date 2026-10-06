/**
* | output |
* | --- |
* | "Access Denied" |
*
* @param {Access_DeniedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const access_denied: ((inputs?: Access_DeniedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Access_DeniedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Access_DeniedInputs = {};
