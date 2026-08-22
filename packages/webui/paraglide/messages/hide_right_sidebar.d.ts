/**
* | output |
* | --- |
* | "Hide Right Sidebar" |
*
* @param {Hide_Right_SidebarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const hide_right_sidebar: ((inputs?: Hide_Right_SidebarInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Hide_Right_SidebarInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Hide_Right_SidebarInputs = {};
