/**
* | output |
* | --- |
* | "24 Hours" |
*
* @param {Twenty_Four_HoursInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const twenty_four_hours: ((inputs?: Twenty_Four_HoursInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Twenty_Four_HoursInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Twenty_Four_HoursInputs = {};
