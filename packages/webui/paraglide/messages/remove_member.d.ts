/**
* | output |
* | --- |
* | "Remove Member" |
*
* @param {Remove_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_member: ((inputs?: Remove_MemberInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Remove_MemberInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Remove_MemberInputs = {};
