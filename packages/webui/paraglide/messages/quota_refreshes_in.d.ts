/**
* | output |
* | --- |
* | "Refreshes in {time}" |
*
* @param {Quota_Refreshes_InInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_refreshes_in: ((inputs: Quota_Refreshes_InInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Refreshes_InInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Refreshes_InInputs = {
    time: NonNullable<unknown>;
};
