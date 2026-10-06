/**
* | output |
* | --- |
* | "You will be the owner of the default workspace as the first user!" |
*
* @param {First_User_NoticeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const first_user_notice: ((inputs?: First_User_NoticeInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<First_User_NoticeInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type First_User_NoticeInputs = {};
