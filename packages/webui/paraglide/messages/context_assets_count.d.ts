/**
* | output |
* | --- |
* | "Context Assets ({count})" |
*
* @param {Context_Assets_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const context_assets_count: ((inputs: Context_Assets_CountInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Context_Assets_CountInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Context_Assets_CountInputs = {
    count: NonNullable<unknown>;
};
