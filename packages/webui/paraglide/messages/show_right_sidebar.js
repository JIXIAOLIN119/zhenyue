/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Show_Right_SidebarInputs */

const zh_show_right_sidebar = /** @type {(inputs: Show_Right_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示右侧边栏`)
};

const en_show_right_sidebar = /** @type {(inputs: Show_Right_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show Right Sidebar`)
};

/**
* | output |
* | --- |
* | "Show Right Sidebar" |
*
* @param {Show_Right_SidebarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const show_right_sidebar = /** @type {((inputs?: Show_Right_SidebarInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Show_Right_SidebarInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_show_right_sidebar(inputs)
	return en_show_right_sidebar(inputs)
});