/**
* | output |
* | --- |
* | "Failed to save" |
*
* @param {Agents_Md_Save_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents_md_save_failed: ((inputs?: Agents_Md_Save_FailedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agents_Md_Save_FailedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agents_Md_Save_FailedInputs = {};
