/**
* | output |
* | --- |
* | "If left empty, the value will be read from the host machine's environment." |
*
* @param {Env_Var_Empty_NoteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const env_var_empty_note: ((inputs?: Env_Var_Empty_NoteInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Env_Var_Empty_NoteInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Env_Var_Empty_NoteInputs = {};
