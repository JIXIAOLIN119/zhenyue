/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Exact_DateInputs */

const zh_exact_date = /** @type {(inputs: Exact_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`精确日期...`)
};

const en_exact_date = /** @type {(inputs: Exact_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exact date...`)
};

/**
* | output |
* | --- |
* | "Exact date..." |
*
* @param {Exact_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const exact_date = /** @type {((inputs?: Exact_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Exact_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_exact_date(inputs)
	return en_exact_date(inputs)
});