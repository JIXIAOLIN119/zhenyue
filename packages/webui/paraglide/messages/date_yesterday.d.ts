/**
* | output |
* | --- |
* | "Yesterday" |
*
* @param {Date_YesterdayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_yesterday: ((inputs?: Date_YesterdayInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Date_YesterdayInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Date_YesterdayInputs = {};
