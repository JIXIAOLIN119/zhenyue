/**
* | output |
* | --- |
* | "{count} task" |
*
* @param {N_Tasks_SingularInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_tasks_singular: ((inputs: N_Tasks_SingularInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Tasks_SingularInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Tasks_SingularInputs = {
    count: NonNullable<unknown>;
};
