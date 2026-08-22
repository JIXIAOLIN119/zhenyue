/**
* | output |
* | --- |
* | "Share this file" |
*
* @param {Share_This_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_this_file: ((inputs?: Share_This_FileInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_This_FileInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_This_FileInputs = {};
