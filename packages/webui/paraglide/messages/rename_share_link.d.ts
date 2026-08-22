/**
* | output |
* | --- |
* | "Rename Share Link" |
*
* @param {Rename_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const rename_share_link: ((inputs?: Rename_Share_LinkInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Rename_Share_LinkInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Rename_Share_LinkInputs = {};
