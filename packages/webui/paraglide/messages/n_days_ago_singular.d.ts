/**
* | output |
* | --- |
* | "{count} day ago" |
*
* @param {N_Days_Ago_SingularInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_days_ago_singular: ((inputs: N_Days_Ago_SingularInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Days_Ago_SingularInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Days_Ago_SingularInputs = {
    count: NonNullable<unknown>;
};
