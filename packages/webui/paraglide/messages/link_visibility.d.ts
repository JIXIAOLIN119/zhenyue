/**
* | output |
* | --- |
* | "Link Visibility" |
*
* @param {Link_VisibilityInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const link_visibility: ((inputs?: Link_VisibilityInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Link_VisibilityInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Link_VisibilityInputs = {};
