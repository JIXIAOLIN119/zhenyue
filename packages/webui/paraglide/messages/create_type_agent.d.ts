/**
* | output |
* | --- |
* | "Create {type} Agent" |
*
* @param {Create_Type_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_type_agent: ((inputs: Create_Type_AgentInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Create_Type_AgentInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Create_Type_AgentInputs = {
    type: NonNullable<unknown>;
};
