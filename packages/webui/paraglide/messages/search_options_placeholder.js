/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Options_PlaceholderInputs */

const zh_search_options_placeholder = /** @type {(inputs: Search_Options_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索选项...`)
};

const en_search_options_placeholder = /** @type {(inputs: Search_Options_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search options...`)
};

/**
* | output |
* | --- |
* | "Search options..." |
*
* @param {Search_Options_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_options_placeholder = /** @type {((inputs?: Search_Options_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Options_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_search_options_placeholder(inputs)
	return en_search_options_placeholder(inputs)
});