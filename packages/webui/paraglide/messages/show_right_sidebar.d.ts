/**
* | output |
* | --- |
* | "Show Right Sidebar" |
*
* @param {Show_Right_SidebarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const show_right_sidebar: ((inputs?: Show_Right_SidebarInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Show_Right_SidebarInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Show_Right_SidebarInputs = {};
