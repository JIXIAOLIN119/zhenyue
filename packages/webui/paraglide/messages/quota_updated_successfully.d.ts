/**
* | output |
* | --- |
* | "Quota rule updated successfully" |
*
* @param {Quota_Updated_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_updated_successfully: ((inputs?: Quota_Updated_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Updated_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Updated_SuccessfullyInputs = {};
