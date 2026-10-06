/**
* | output |
* | --- |
* | "Tomorrow" |
*
* @param {Date_TomorrowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_tomorrow: ((inputs?: Date_TomorrowInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Date_TomorrowInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Date_TomorrowInputs = {};
