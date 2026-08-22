/**
* | output |
* | --- |
* | "No Providers Configured" |
*
* @param {No_Providers_ConfiguredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_providers_configured: ((inputs?: No_Providers_ConfiguredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Providers_ConfiguredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Providers_ConfiguredInputs = {};
