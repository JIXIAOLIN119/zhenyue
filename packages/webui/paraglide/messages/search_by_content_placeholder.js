/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_By_Content_PlaceholderInputs */

const zh_search_by_content_placeholder = /** @type {(inputs: Search_By_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按内容搜索记录...`)
};

const en_search_by_content_placeholder = /** @type {(inputs: Search_By_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search records by content...`)
};

/**
* | output |
* | --- |
* | "Search records by content..." |
*
* @param {Search_By_Content_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_by_content_placeholder = /** @type {((inputs?: Search_By_Content_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_By_Content_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_search_by_content_placeholder(inputs)
	return en_search_by_content_placeholder(inputs)
});