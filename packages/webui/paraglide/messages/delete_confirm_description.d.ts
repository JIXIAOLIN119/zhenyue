/**
* | output |
* | --- |
* | "Are you sure you want to delete this {type}? This action cannot be undone." |
*
* @param {Delete_Confirm_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_confirm_description: ((inputs: Delete_Confirm_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Confirm_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Confirm_DescriptionInputs = {
    type: NonNullable<unknown>;
};
