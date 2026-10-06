/**
* | output |
* | --- |
* | "Move Here" |
*
* @param {Move_HereInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const move_here: ((inputs?: Move_HereInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Move_HereInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Move_HereInputs = {};
