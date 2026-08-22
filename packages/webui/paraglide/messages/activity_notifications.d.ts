/**
* | output |
* | --- |
* | "Activity Notifications" |
*
* @param {Activity_NotificationsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const activity_notifications: ((inputs?: Activity_NotificationsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Activity_NotificationsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Activity_NotificationsInputs = {};
