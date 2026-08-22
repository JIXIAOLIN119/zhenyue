/**
* | output |
* | --- |
* | "Sandbox settings updated" |
*
* @param {Sandbox_Settings_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sandbox_settings_updated: ((inputs?: Sandbox_Settings_UpdatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sandbox_Settings_UpdatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sandbox_Settings_UpdatedInputs = {};
