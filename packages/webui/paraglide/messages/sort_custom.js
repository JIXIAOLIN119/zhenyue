/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sort_CustomInputs */

const zh_sort_custom = /** @type {(inputs: Sort_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义`)
};

const en_sort_custom = /** @type {(inputs: Sort_CustomInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom`)
};

/**
* | output |
* | --- |
* | "Custom" |
*
* @param {Sort_CustomInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_custom = /** @type {((inputs?: Sort_CustomInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_CustomInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sort_custom(inputs)
	return en_sort_custom(inputs)
});