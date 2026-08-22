/**
* | output |
* | --- |
* | "Failed to remove member" |
*
* @param {Failed_To_Remove_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_remove_member: ((inputs?: Failed_To_Remove_MemberInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_Remove_MemberInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_Remove_MemberInputs = {};
