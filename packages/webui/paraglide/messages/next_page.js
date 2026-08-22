/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Next_PageInputs */

const zh_next_page = /** @type {(inputs: Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一页`)
};

const en_next_page = /** @type {(inputs: Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next Page`)
};

/**
* | output |
* | --- |
* | "Next Page" |
*
* @param {Next_PageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const next_page = /** @type {((inputs?: Next_PageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Next_PageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_next_page(inputs)
	return en_next_page(inputs)
});