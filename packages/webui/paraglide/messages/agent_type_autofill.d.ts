/**
* | output |
* | --- |
* | "Autofill" |
*
* @param {Agent_Type_AutofillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_type_autofill: ((inputs?: Agent_Type_AutofillInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Type_AutofillInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Type_AutofillInputs = {};
