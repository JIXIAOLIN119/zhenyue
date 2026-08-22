/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sort_NameInputs */

const zh_sort_name = /** @type {(inputs: Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const en_sort_name = /** @type {(inputs: Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Sort_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_name = /** @type {((inputs?: Sort_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sort_name(inputs)
	return en_sort_name(inputs)
});