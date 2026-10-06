/**
* | output |
* | --- |
* | "{count} Assets" |
*
* @param {N_Assets_PluralInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_assets_plural: ((inputs: N_Assets_PluralInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Assets_PluralInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Assets_PluralInputs = {
    count: NonNullable<unknown>;
};
