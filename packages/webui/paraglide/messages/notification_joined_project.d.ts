/**
* | output |
* | --- |
* | "{user} joined {project}" |
*
* @param {Notification_Joined_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_joined_project: ((inputs: Notification_Joined_ProjectInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Notification_Joined_ProjectInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Notification_Joined_ProjectInputs = {
    user: NonNullable<unknown>;
    project: NonNullable<unknown>;
};
