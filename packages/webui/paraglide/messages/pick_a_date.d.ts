/**
* | output |
* | --- |
* | "Pick a date" |
*
* @param {Pick_A_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const pick_a_date: ((inputs?: Pick_A_DateInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Pick_A_DateInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Pick_A_DateInputs = {};
