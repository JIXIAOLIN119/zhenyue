/**
* | output |
* | --- |
* | "This action cannot be undone. This will permanently delete the provider \"{name}\" and all associated model configurations." |
*
* @param {Delete_Provider_ConfirmationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_provider_confirmation: ((inputs: Delete_Provider_ConfirmationInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Provider_ConfirmationInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Provider_ConfirmationInputs = {
    name: NonNullable<unknown>;
};
