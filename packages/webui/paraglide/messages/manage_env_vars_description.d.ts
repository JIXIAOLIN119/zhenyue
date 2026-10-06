/**
* | output |
* | --- |
* | "Manage environment variables for this skill instance." |
*
* @param {Manage_Env_Vars_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const manage_env_vars_description: ((inputs?: Manage_Env_Vars_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Manage_Env_Vars_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Manage_Env_Vars_DescriptionInputs = {};
