/**
* | output |
* | --- |
* | "Oldest → Newest" |
*
* @param {Sort_Oldest_To_NewestInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_oldest_to_newest: ((inputs?: Sort_Oldest_To_NewestInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sort_Oldest_To_NewestInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sort_Oldest_To_NewestInputs = {};
