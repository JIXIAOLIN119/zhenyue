/**
* | output |
* | --- |
* | "{count} Item" |
*
* @param {N_Items_SingularInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_items_singular: ((inputs: N_Items_SingularInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Items_SingularInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Items_SingularInputs = {
    count: NonNullable<unknown>;
};
