/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Hide_Right_SidebarInputs */

const zh_hide_right_sidebar = /** @type {(inputs: Hide_Right_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏右侧边栏`)
};

const en_hide_right_sidebar = /** @type {(inputs: Hide_Right_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide Right Sidebar`)
};

/**
* | output |
* | --- |
* | "Hide Right Sidebar" |
*
* @param {Hide_Right_SidebarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const hide_right_sidebar = /** @type {((inputs?: Hide_Right_SidebarInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hide_Right_SidebarInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_hide_right_sidebar(inputs)
	return en_hide_right_sidebar(inputs)
});