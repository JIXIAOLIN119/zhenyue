/**
* | output |
* | --- |
* | "{count} days ago" |
*
* @param {N_Days_Ago_PluralInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_days_ago_plural: ((inputs: N_Days_Ago_PluralInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Days_Ago_PluralInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Days_Ago_PluralInputs = {
    count: NonNullable<unknown>;
};
