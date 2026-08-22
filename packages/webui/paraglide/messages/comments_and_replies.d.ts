/**
* | output |
* | --- |
* | "Comments & Replies" |
*
* @param {Comments_And_RepliesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_and_replies: ((inputs?: Comments_And_RepliesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Comments_And_RepliesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Comments_And_RepliesInputs = {};
