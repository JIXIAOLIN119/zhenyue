/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sort_CreatedInputs */

const zh_sort_created = /** @type {(inputs: Sort_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建时间`)
};

const en_sort_created = /** @type {(inputs: Sort_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Created`)
};

/**
* | output |
* | --- |
* | "Created" |
*
* @param {Sort_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_created = /** @type {((inputs?: Sort_CreatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_CreatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sort_created(inputs)
	return en_sort_created(inputs)
});