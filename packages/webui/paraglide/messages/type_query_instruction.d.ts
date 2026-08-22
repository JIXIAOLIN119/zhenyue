/**
* | output |
* | --- |
* | "Type your query above and click the Search button to display results." |
*
* @param {Type_Query_InstructionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const type_query_instruction: ((inputs?: Type_Query_InstructionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Type_Query_InstructionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Type_Query_InstructionInputs = {};
