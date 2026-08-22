/**
* | output |
* | --- |
* | "Comment" |
*
* @param {Session_Type_CommentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const session_type_comment: ((inputs?: Session_Type_CommentInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Session_Type_CommentInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Session_Type_CommentInputs = {};
