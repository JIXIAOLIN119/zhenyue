/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Fields_PlaceholderInputs */

const zh_search_fields_placeholder = /** @type {(inputs: Search_Fields_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索字段`)
};

const en_search_fields_placeholder = /** @type {(inputs: Search_Fields_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search fields`)
};

/**
* | output |
* | --- |
* | "Search fields" |
*
* @param {Search_Fields_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_fields_placeholder = /** @type {((inputs?: Search_Fields_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Fields_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_search_fields_placeholder(inputs)
	return en_search_fields_placeholder(inputs)
});