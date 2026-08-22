/**
* | output |
* | --- |
* | "Failed to update avatar" |
*
* @param {Failed_Update_AvatarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_avatar: ((inputs?: Failed_Update_AvatarInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Update_AvatarInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Update_AvatarInputs = {};
