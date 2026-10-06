/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Tools_PlaceholderInputs */

const zh_search_tools_placeholder = /** @type {(inputs: Search_Tools_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按名称或描述搜索工具...`)
};

const en_search_tools_placeholder = /** @type {(inputs: Search_Tools_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search tools by name or description...`)
};

/**
* | output |
* | --- |
* | "Search tools by name or description..." |
*
* @param {Search_Tools_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_tools_placeholder = /** @type {((inputs?: Search_Tools_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Tools_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_search_tools_placeholder(inputs)
	return en_search_tools_placeholder(inputs)
});