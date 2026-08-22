/**
* | output |
* | --- |
* | "Moved successfully" |
*
* @param {Moved_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const moved_successfully: ((inputs?: Moved_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Moved_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Moved_SuccessfullyInputs = {};
