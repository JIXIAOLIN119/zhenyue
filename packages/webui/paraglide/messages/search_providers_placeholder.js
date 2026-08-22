/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Providers_PlaceholderInputs */

const zh_search_providers_placeholder = /** @type {(inputs: Search_Providers_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索提供商...`)
};

const en_search_providers_placeholder = /** @type {(inputs: Search_Providers_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search providers...`)
};

/**
* | output |
* | --- |
* | "Search providers..." |
*
* @param {Search_Providers_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_providers_placeholder = /** @type {((inputs?: Search_Providers_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Providers_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_search_providers_placeholder(inputs)
	return en_search_providers_placeholder(inputs)
});