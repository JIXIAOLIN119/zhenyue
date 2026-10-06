/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ready_To_SearchInputs */

const zh_ready_to_search = /** @type {(inputs: Ready_To_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`准备搜索`)
};

const en_ready_to_search = /** @type {(inputs: Ready_To_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready to Search`)
};

/**
* | output |
* | --- |
* | "Ready to Search" |
*
* @param {Ready_To_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ready_to_search = /** @type {((inputs?: Ready_To_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ready_To_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_ready_to_search(inputs)
	return en_ready_to_search(inputs)
});