/**
* | output |
* | --- |
* | "{user} joined {team}" |
*
* @param {Notification_Joined_TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_joined_team: ((inputs: Notification_Joined_TeamInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Notification_Joined_TeamInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Notification_Joined_TeamInputs = {
    user: NonNullable<unknown>;
    team: NonNullable<unknown>;
};
