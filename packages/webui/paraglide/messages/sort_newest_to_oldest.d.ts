/**
* | output |
* | --- |
* | "Newest → Oldest" |
*
* @param {Sort_Newest_To_OldestInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_newest_to_oldest: ((inputs?: Sort_Newest_To_OldestInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sort_Newest_To_OldestInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sort_Newest_To_OldestInputs = {};
