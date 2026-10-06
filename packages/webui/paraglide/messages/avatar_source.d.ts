/**
* | output |
* | --- |
* | "Avatar Source" |
*
* @param {Avatar_SourceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const avatar_source: ((inputs?: Avatar_SourceInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Avatar_SourceInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Avatar_SourceInputs = {};
