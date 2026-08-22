/**
* | output |
* | --- |
* | "{count} tasks" |
*
* @param {N_Tasks_PluralInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_tasks_plural: ((inputs: N_Tasks_PluralInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Tasks_PluralInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Tasks_PluralInputs = {
    count: NonNullable<unknown>;
};
