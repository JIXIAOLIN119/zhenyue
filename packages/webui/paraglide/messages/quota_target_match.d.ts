/**
* | output |
* | --- |
* | "Match: {value}" |
*
* @param {Quota_Target_MatchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_target_match: ((inputs: Quota_Target_MatchInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Target_MatchInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Target_MatchInputs = {
    value: NonNullable<unknown>;
};
