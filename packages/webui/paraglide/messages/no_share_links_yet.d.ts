/**
* | output |
* | --- |
* | "No share links created yet." |
*
* @param {No_Share_Links_YetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_share_links_yet: ((inputs?: No_Share_Links_YetInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Share_Links_YetInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Share_Links_YetInputs = {};
