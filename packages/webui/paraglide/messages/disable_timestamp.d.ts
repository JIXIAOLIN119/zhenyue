/**
* | output |
* | --- |
* | "Disable Timestamp" |
*
* @param {Disable_TimestampInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const disable_timestamp: ((inputs?: Disable_TimestampInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Disable_TimestampInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Disable_TimestampInputs = {};
