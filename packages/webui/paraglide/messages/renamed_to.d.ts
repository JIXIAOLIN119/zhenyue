/**
* | output |
* | --- |
* | "Renamed to" |
*
* @param {Renamed_ToInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const renamed_to: ((inputs?: Renamed_ToInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Renamed_ToInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Renamed_ToInputs = {};
