/**
* | output |
* | --- |
* | "Reviewer" |
*
* @param {ReviewerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reviewer: ((inputs?: ReviewerInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<ReviewerInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type ReviewerInputs = {};
