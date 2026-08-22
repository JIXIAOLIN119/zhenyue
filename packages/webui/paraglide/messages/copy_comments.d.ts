/**
* | output |
* | --- |
* | "Copy comments" |
*
* @param {Copy_CommentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copy_comments: ((inputs?: Copy_CommentsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Copy_CommentsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Copy_CommentsInputs = {};
