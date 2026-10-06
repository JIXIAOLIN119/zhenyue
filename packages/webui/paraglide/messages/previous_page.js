/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Previous_PageInputs */

const zh_previous_page = /** @type {(inputs: Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一页`)
};

const en_previous_page = /** @type {(inputs: Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous Page`)
};

/**
* | output |
* | --- |
* | "Previous Page" |
*
* @param {Previous_PageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const previous_page = /** @type {((inputs?: Previous_PageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Previous_PageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_previous_page(inputs)
	return en_previous_page(inputs)
});