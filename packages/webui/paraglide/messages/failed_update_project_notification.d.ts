/**
* | output |
* | --- |
* | "Failed to update project notification settings" |
*
* @param {Failed_Update_Project_NotificationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_project_notification: ((inputs?: Failed_Update_Project_NotificationInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Update_Project_NotificationInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Update_Project_NotificationInputs = {};
