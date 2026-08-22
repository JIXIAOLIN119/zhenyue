/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} FiltersInputs */

const zh_filters = /** @type {(inputs: FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选条件`)
};

const en_filters = /** @type {(inputs: FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters`)
};

/**
* | output |
* | --- |
* | "Filters" |
*
* @param {FiltersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filters = /** @type {((inputs?: FiltersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FiltersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_filters(inputs)
	return en_filters(inputs)
});