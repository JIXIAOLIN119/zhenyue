/**
* | output |
* | --- |
* | "Status Updates" |
*
* @param {Status_UpdatesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const status_updates: ((inputs?: Status_UpdatesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Status_UpdatesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Status_UpdatesInputs = {};
