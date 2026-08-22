/**
* | output |
* | --- |
* | "Are you sure you want to remove {name} from this {type}? This action cannot be undone." |
*
* @param {Remove_Member_ConfirmationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_member_confirmation: ((inputs: Remove_Member_ConfirmationInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Remove_Member_ConfirmationInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Remove_Member_ConfirmationInputs = {
    type: NonNullable<unknown>;
    name: NonNullable<unknown>;
};
