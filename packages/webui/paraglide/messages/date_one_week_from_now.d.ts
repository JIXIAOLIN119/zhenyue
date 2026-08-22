/**
* | output |
* | --- |
* | "One week from now" |
*
* @param {Date_One_Week_From_NowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_one_week_from_now: ((inputs?: Date_One_Week_From_NowInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Date_One_Week_From_NowInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Date_One_Week_From_NowInputs = {};
