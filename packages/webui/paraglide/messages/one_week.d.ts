/**
* | output |
* | --- |
* | "1 Week" |
*
* @param {One_WeekInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const one_week: ((inputs?: One_WeekInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<One_WeekInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type One_WeekInputs = {};
