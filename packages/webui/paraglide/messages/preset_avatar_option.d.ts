/**
* | output |
* | --- |
* | "Preset Avatar Option" |
*
* @param {Preset_Avatar_OptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preset_avatar_option: ((inputs?: Preset_Avatar_OptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Preset_Avatar_OptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Preset_Avatar_OptionInputs = {};
