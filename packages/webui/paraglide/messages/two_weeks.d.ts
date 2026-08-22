/**
* | output |
* | --- |
* | "2 Weeks" |
*
* @param {Two_WeeksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const two_weeks: ((inputs?: Two_WeeksInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Two_WeeksInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Two_WeeksInputs = {};
