/**
* | output |
* | --- |
* | "No {type} agents found" |
*
* @param {No_Agents_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_agents_found: ((inputs: No_Agents_FoundInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Agents_FoundInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Agents_FoundInputs = {
    type: NonNullable<unknown>;
};
