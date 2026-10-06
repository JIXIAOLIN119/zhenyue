/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Updated_AgoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const updated_ago: ((inputs?: Updated_AgoInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Updated_AgoInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Updated_AgoInputs = {};
