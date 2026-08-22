/**
* | output |
* | --- |
* | "When someone replies to your comment" |
*
* @param {When_Someone_RepliesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const when_someone_replies: ((inputs?: When_Someone_RepliesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<When_Someone_RepliesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type When_Someone_RepliesInputs = {};
