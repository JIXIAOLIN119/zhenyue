/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Show_Left_SidebarInputs */

const zh_show_left_sidebar = /** @type {(inputs: Show_Left_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示左侧边栏`)
};

const en_show_left_sidebar = /** @type {(inputs: Show_Left_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show Left Sidebar`)
};

/**
* | output |
* | --- |
* | "Show Left Sidebar" |
*
* @param {Show_Left_SidebarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const show_left_sidebar = /** @type {((inputs?: Show_Left_SidebarInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Show_Left_SidebarInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_show_left_sidebar(inputs)
	return en_show_left_sidebar(inputs)
});