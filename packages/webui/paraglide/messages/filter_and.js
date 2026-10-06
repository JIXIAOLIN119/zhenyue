/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Filter_AndInputs */

const zh_filter_and = /** @type {(inputs: Filter_AndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`且`)
};

const en_filter_and = /** @type {(inputs: Filter_AndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`and`)
};

/**
* | output |
* | --- |
* | "and" |
*
* @param {Filter_AndInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filter_and = /** @type {((inputs?: Filter_AndInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Filter_AndInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_filter_and(inputs)
	return en_filter_and(inputs)
});