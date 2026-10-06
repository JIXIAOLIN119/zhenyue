/**
* | output |
* | --- |
* | "Light Grid" |
*
* @param {Light_GridInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const light_grid: ((inputs?: Light_GridInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Light_GridInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Light_GridInputs = {};
