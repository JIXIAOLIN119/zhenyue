/**
* | output |
* | --- |
* | "Hide Left Sidebar" |
*
* @param {Hide_Left_SidebarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const hide_left_sidebar: ((inputs?: Hide_Left_SidebarInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Hide_Left_SidebarInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Hide_Left_SidebarInputs = {};
