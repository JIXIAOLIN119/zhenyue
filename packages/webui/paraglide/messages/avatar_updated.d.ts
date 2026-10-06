/**
* | output |
* | --- |
* | "Avatar updated successfully" |
*
* @param {Avatar_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const avatar_updated: ((inputs?: Avatar_UpdatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Avatar_UpdatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Avatar_UpdatedInputs = {};
