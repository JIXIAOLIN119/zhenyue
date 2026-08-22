/**
* | output |
* | --- |
* | "Share link status updated" |
*
* @param {Share_Link_Status_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_link_status_updated: ((inputs?: Share_Link_Status_UpdatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_Link_Status_UpdatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_Link_Status_UpdatedInputs = {};
