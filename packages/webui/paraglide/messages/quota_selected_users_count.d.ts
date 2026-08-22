/**
* | output |
* | --- |
* | "{count} members selected" |
*
* @param {Quota_Selected_Users_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_selected_users_count: ((inputs: Quota_Selected_Users_CountInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Selected_Users_CountInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Selected_Users_CountInputs = {
    count: NonNullable<unknown>;
};
