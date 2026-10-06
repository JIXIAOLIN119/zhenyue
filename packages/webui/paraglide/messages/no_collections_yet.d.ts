/**
* | output |
* | --- |
* | "No collections created yet." |
*
* @param {No_Collections_YetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_collections_yet: ((inputs?: No_Collections_YetInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Collections_YetInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Collections_YetInputs = {};
