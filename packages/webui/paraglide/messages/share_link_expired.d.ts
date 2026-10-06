/**
* | output |
* | --- |
* | "This share link has expired" |
*
* @param {Share_Link_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_link_expired: ((inputs?: Share_Link_ExpiredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_Link_ExpiredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_Link_ExpiredInputs = {};
