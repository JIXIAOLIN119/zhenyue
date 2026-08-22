/**
* | output |
* | --- |
* | "e.g. * or npm*" |
*
* @param {Bash_Command_Pattern_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const bash_command_pattern_placeholder: ((inputs?: Bash_Command_Pattern_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Bash_Command_Pattern_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Bash_Command_Pattern_PlaceholderInputs = {};
