/**
* | output |
* | --- |
* | "Model is required" |
*
* @param {Model_Is_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const model_is_required: ((inputs?: Model_Is_RequiredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Model_Is_RequiredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Model_Is_RequiredInputs = {};
