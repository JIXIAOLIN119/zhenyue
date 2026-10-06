/**
* | output |
* | --- |
* | "Server: {value}" |
*
* @param {Quota_Target_ServerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_target_server: ((inputs: Quota_Target_ServerInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Target_ServerInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Target_ServerInputs = {
    value: NonNullable<unknown>;
};
