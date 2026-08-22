/**
* | output |
* | --- |
* | "@Mentions" |
*
* @param {At_MentionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const at_mentions: ((inputs?: At_MentionsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<At_MentionsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type At_MentionsInputs = {};
