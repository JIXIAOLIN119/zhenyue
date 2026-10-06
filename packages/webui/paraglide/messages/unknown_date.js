/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unknown_DateInputs */

const zh_unknown_date = /** @type {(inputs: Unknown_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知日期`)
};

const en_unknown_date = /** @type {(inputs: Unknown_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown Date`)
};

/**
* | output |
* | --- |
* | "Unknown Date" |
*
* @param {Unknown_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unknown_date = /** @type {((inputs?: Unknown_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unknown_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_unknown_date(inputs)
	return en_unknown_date(inputs)
});