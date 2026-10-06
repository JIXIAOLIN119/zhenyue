/**
* | output |
* | --- |
* | "({count} visible)" |
*
* @param {Visible_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const visible_count: ((inputs: Visible_CountInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Visible_CountInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Visible_CountInputs = {
    count: NonNullable<unknown>;
};
