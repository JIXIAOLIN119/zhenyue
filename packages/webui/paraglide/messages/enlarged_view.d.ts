/**
* | output |
* | --- |
* | "Enlarged view" |
*
* @param {Enlarged_ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enlarged_view: ((inputs?: Enlarged_ViewInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Enlarged_ViewInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Enlarged_ViewInputs = {};
