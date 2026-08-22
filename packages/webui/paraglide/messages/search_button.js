/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_ButtonInputs */

const zh_search_button = /** @type {(inputs: Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const en_search_button = /** @type {(inputs: Search_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Search_ButtonInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_button = /** @type {((inputs?: Search_ButtonInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_ButtonInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_search_button(inputs)
	return en_search_button(inputs)
});