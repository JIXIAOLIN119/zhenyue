/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Hide_Left_SidebarInputs */

const zh_hide_left_sidebar = /** @type {(inputs: Hide_Left_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏左侧边栏`)
};

const en_hide_left_sidebar = /** @type {(inputs: Hide_Left_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide Left Sidebar`)
};

/**
* | output |
* | --- |
* | "Hide Left Sidebar" |
*
* @param {Hide_Left_SidebarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const hide_left_sidebar = /** @type {((inputs?: Hide_Left_SidebarInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hide_Left_SidebarInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_hide_left_sidebar(inputs)
	return en_hide_left_sidebar(inputs)
});