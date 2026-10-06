/**
* | output |
* | --- |
* | "Failed to update notification settings" |
*
* @param {Failed_To_Update_Notification_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_update_notification_settings: ((inputs?: Failed_To_Update_Notification_SettingsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_Update_Notification_SettingsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_Update_Notification_SettingsInputs = {};
