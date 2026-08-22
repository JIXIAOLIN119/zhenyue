/**
* | output |
* | --- |
* | "{count} Items" |
*
* @param {N_Items_PluralInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_items_plural: ((inputs: N_Items_PluralInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Items_PluralInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Items_PluralInputs = {
    count: NonNullable<unknown>;
};
