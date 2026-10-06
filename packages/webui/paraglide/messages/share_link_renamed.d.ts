/**
* | output |
* | --- |
* | "Share link renamed" |
*
* @param {Share_Link_RenamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_link_renamed: ((inputs?: Share_Link_RenamedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_Link_RenamedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_Link_RenamedInputs = {};
