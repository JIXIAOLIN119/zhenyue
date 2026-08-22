/**
* | output |
* | --- |
* | "Quota rule deleted successfully" |
*
* @param {Quota_Deleted_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_deleted_successfully: ((inputs?: Quota_Deleted_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Deleted_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Deleted_SuccessfullyInputs = {};
