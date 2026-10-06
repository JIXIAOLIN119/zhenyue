/**
* | output |
* | --- |
* | "Exact date..." |
*
* @param {Exact_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const exact_date: ((inputs?: Exact_DateInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Exact_DateInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Exact_DateInputs = {};
