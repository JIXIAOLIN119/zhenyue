/**
* | output |
* | --- |
* | "Avatar removed successfully" |
*
* @param {Avatar_RemovedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const avatar_removed: ((inputs?: Avatar_RemovedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Avatar_RemovedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Avatar_RemovedInputs = {};
