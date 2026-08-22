/**
* | output |
* | --- |
* | "Enable Timestamp" |
*
* @param {Enable_TimestampInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enable_timestamp: ((inputs?: Enable_TimestampInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Enable_TimestampInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Enable_TimestampInputs = {};
