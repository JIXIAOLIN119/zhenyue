/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Expiration_DateInputs */

const zh_expiration_date = /** @type {(inputs: Expiration_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`过期日期`)
};

const en_expiration_date = /** @type {(inputs: Expiration_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expiration Date`)
};

/**
* | output |
* | --- |
* | "Expiration Date" |
*
* @param {Expiration_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const expiration_date = /** @type {((inputs?: Expiration_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Expiration_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_expiration_date(inputs)
	return en_expiration_date(inputs)
});