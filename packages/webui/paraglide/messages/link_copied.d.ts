/**
* | output |
* | --- |
* | "Link copied to clipboard" |
*
* @param {Link_CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const link_copied: ((inputs?: Link_CopiedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Link_CopiedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Link_CopiedInputs = {};
