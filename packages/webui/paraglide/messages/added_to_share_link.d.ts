/**
* | output |
* | --- |
* | "Added to share link" |
*
* @param {Added_To_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const added_to_share_link: ((inputs?: Added_To_Share_LinkInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Added_To_Share_LinkInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Added_To_Share_LinkInputs = {};
