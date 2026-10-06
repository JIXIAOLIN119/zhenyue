/**
* | output |
* | --- |
* | "Reset usage for {target}? Consumption will be cleared and a new quota window will start now." |
*
* @param {Quota_Reset_Usage_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_reset_usage_confirm: ((inputs: Quota_Reset_Usage_ConfirmInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Reset_Usage_ConfirmInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Reset_Usage_ConfirmInputs = {
    target: NonNullable<unknown>;
};
