/**
* | output |
* | --- |
* | "Toggle Annotation" |
*
* @param {Toggle_AnnotationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const toggle_annotation: ((inputs?: Toggle_AnnotationInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Toggle_AnnotationInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Toggle_AnnotationInputs = {};
