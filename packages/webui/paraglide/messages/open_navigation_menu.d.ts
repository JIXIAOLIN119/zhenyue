/**
* | output |
* | --- |
* | "Open navigation menu" |
*
* @param {Open_Navigation_MenuInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const open_navigation_menu: ((inputs?: Open_Navigation_MenuInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Open_Navigation_MenuInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Open_Navigation_MenuInputs = {};
