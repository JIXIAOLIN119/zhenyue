/**
* | output |
* | --- |
* | "Select a Team" |
*
* @param {Select_A_TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_a_team: ((inputs?: Select_A_TeamInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Select_A_TeamInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Select_A_TeamInputs = {};
