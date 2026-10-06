/**
* | output |
* | --- |
* | "Today {time}" |
*
* @param {Today_With_TimeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const today_with_time: ((inputs: Today_With_TimeInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Today_With_TimeInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Today_With_TimeInputs = {
    time: NonNullable<unknown>;
};
