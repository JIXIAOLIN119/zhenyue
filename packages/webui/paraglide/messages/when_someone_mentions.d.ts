/**
* | output |
* | --- |
* | "When someone @mentions you in a comment" |
*
* @param {When_Someone_MentionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const when_someone_mentions: ((inputs?: When_Someone_MentionsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<When_Someone_MentionsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type When_Someone_MentionsInputs = {};
