/**
* | output |
* | --- |
* | "Add options: {name}" |
*
* @param {Add_Option_With_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_option_with_name: ((inputs: Add_Option_With_NameInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_Option_With_NameInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_Option_With_NameInputs = {
    name: NonNullable<unknown>;
};
