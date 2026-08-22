/**
* | output |
* | --- |
* | "Share Expired" |
*
* @param {Share_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_expired: ((inputs?: Share_ExpiredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_ExpiredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_ExpiredInputs = {};
