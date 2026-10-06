/**
* | output |
* | --- |
* | "All Share Links ({count})" |
*
* @param {All_Share_Links_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_share_links_count: ((inputs: All_Share_Links_CountInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<All_Share_Links_CountInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type All_Share_Links_CountInputs = {
    count: NonNullable<unknown>;
};
