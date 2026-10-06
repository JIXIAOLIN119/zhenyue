/**
* | output |
* | --- |
* | "Invite New Member" |
*
* @param {Invite_New_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const invite_new_member: ((inputs?: Invite_New_MemberInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Invite_New_MemberInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Invite_New_MemberInputs = {};
