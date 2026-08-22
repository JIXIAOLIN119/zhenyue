/**
* | output |
* | --- |
* | "Saving..." |
*
* @param {Saving_EllipsisInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const saving_ellipsis: ((inputs?: Saving_EllipsisInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Saving_EllipsisInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Saving_EllipsisInputs = {};
