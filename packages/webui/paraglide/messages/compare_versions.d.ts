/**
* | output |
* | --- |
* | "Compare Versions" |
*
* @param {Compare_VersionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const compare_versions: ((inputs?: Compare_VersionsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Compare_VersionsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Compare_VersionsInputs = {};
