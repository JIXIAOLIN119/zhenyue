/**
* | output |
* | --- |
* | "General Comments" |
*
* @param {General_CommentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const general_comments: ((inputs?: General_CommentsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<General_CommentsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type General_CommentsInputs = {};
