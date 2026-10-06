/**
* | output |
* | --- |
* | "Access Share" |
*
* @param {Access_ShareInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const access_share: ((inputs?: Access_ShareInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Access_ShareInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Access_ShareInputs = {};
