/**
* | output |
* | --- |
* | "{count} Skills" |
*
* @param {Skills_Count_ValueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skills_count_value: ((inputs: Skills_Count_ValueInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Skills_Count_ValueInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Skills_Count_ValueInputs = {
    count: NonNullable<unknown>;
};
