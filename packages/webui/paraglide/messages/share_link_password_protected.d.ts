/**
* | output |
* | --- |
* | "This share link is password protected." |
*
* @param {Share_Link_Password_ProtectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_link_password_protected: ((inputs?: Share_Link_Password_ProtectedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_Link_Password_ProtectedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_Link_Password_ProtectedInputs = {};
