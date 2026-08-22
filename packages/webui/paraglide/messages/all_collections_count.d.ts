/**
* | output |
* | --- |
* | "All Collections ({count})" |
*
* @param {All_Collections_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_collections_count: ((inputs: All_Collections_CountInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<All_Collections_CountInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type All_Collections_CountInputs = {
    count: NonNullable<unknown>;
};
