/**
* | output |
* | --- |
* | "Active Window" |
*
* @param {Quota_Active_WindowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_active_window: ((inputs?: Quota_Active_WindowInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Active_WindowInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Active_WindowInputs = {};
