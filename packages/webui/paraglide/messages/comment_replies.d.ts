/**
* | output |
* | --- |
* | "Comment Replies" |
*
* @param {Comment_RepliesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comment_replies: ((inputs?: Comment_RepliesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Comment_RepliesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Comment_RepliesInputs = {};
