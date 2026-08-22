/**
* | output |
* | --- |
* | "{count} Item(s)" |
*
* @param {N_Items_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_items_count: ((inputs: N_Items_CountInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Items_CountInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Items_CountInputs = {
    count: NonNullable<unknown>;
};
