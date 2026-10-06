/**
* | output |
* | --- |
* | "Timestamp" |
*
* @param {TimestampInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const timestamp: ((inputs?: TimestampInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<TimestampInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type TimestampInputs = {};
