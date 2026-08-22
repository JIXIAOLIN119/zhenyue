/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} View_ToolsInputs */

const zh_view_tools = /** @type {(inputs: View_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看工具`)
};

const en_view_tools = /** @type {(inputs: View_ToolsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View Tools`)
};

/**
* | output |
* | --- |
* | "View Tools" |
*
* @param {View_ToolsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const view_tools = /** @type {((inputs?: View_ToolsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<View_ToolsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_view_tools(inputs)
	return en_view_tools(inputs)
});