/**
* | output |
* | --- |
* | "At least one model is required" |
*
* @param {At_Least_One_Model_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const at_least_one_model_required: ((inputs?: At_Least_One_Model_RequiredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<At_Least_One_Model_RequiredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type At_Least_One_Model_RequiredInputs = {};
