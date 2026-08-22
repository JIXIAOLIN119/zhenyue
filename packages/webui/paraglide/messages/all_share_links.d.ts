/**
* | output |
* | --- |
* | "All Share Links" |
*
* @param {All_Share_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_share_links: ((inputs?: All_Share_LinksInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<All_Share_LinksInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type All_Share_LinksInputs = {};
