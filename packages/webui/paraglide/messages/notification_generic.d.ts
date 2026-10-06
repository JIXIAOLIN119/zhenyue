/**
* | output |
* | --- |
* | "New notification from {creator}" |
*
* @param {Notification_GenericInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_generic: ((inputs: Notification_GenericInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Notification_GenericInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Notification_GenericInputs = {
    creator: NonNullable<unknown>;
};
