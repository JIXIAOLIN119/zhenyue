/**
* | output |
* | --- |
* | "Bash Match Wildcard" |
*
* @param {Bash_Command_PatternInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const bash_command_pattern: ((inputs?: Bash_Command_PatternInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Bash_Command_PatternInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Bash_Command_PatternInputs = {};
