/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Semantic_SearchInputs */

const zh_semantic_search = /** @type {(inputs: Semantic_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语义搜索`)
};

const en_semantic_search = /** @type {(inputs: Semantic_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semantic Search`)
};

/**
* | output |
* | --- |
* | "Semantic Search" |
*
* @param {Semantic_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const semantic_search = /** @type {((inputs?: Semantic_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Semantic_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_semantic_search(inputs)
	return en_semantic_search(inputs)
});