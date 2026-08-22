/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_ToolInputs */

const zh_select_tool = /** @type {(inputs: Select_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择工具`)
};

const en_select_tool = /** @type {(inputs: Select_ToolInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Tool`)
};

/**
* | output |
* | --- |
* | "Select Tool" |
*
* @param {Select_ToolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_tool = /** @type {((inputs?: Select_ToolInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_ToolInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_tool(inputs)
	return en_select_tool(inputs)
});