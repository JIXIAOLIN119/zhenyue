/**
* | output |
* | --- |
* | "Renamed successfully" |
*
* @param {Renamed_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const renamed_successfully: ((inputs?: Renamed_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Renamed_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Renamed_SuccessfullyInputs = {};
