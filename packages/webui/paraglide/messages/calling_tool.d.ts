/**
* | output |
* | --- |
* | "Calling Tool:" |
*
* @param {Calling_ToolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const calling_tool: ((inputs?: Calling_ToolInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Calling_ToolInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Calling_ToolInputs = {};
