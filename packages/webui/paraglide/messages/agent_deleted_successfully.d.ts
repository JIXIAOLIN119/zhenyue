/**
* | output |
* | --- |
* | "Agent deleted successfully" |
*
* @param {Agent_Deleted_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_deleted_successfully: ((inputs?: Agent_Deleted_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Deleted_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Deleted_SuccessfullyInputs = {};
