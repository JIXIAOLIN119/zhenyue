/**
* | output |
* | --- |
* | "Share Disabled" |
*
* @param {Share_DisabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_disabled: ((inputs?: Share_DisabledInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_DisabledInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_DisabledInputs = {};
