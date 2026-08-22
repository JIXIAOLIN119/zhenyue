/**
* | output |
* | --- |
* | "Type **delete** to confirm:" |
*
* @param {Type_Delete_To_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const type_delete_to_confirm: ((inputs?: Type_Delete_To_ConfirmInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Type_Delete_To_ConfirmInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Type_Delete_To_ConfirmInputs = {};
