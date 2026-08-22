/**
* | output |
* | --- |
* | "Add to Share Links" |
*
* @param {Add_To_Share_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_to_share_links: ((inputs?: Add_To_Share_LinksInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_To_Share_LinksInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_To_Share_LinksInputs = {};
