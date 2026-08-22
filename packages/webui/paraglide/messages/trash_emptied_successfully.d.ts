/**
* | output |
* | --- |
* | "Trash emptied successfully" |
*
* @param {Trash_Emptied_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const trash_emptied_successfully: ((inputs?: Trash_Emptied_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Trash_Emptied_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Trash_Emptied_SuccessfullyInputs = {};
