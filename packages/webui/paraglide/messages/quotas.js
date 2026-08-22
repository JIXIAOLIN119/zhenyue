/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} QuotasInputs */

const zh_quotas = /** @type {(inputs: QuotasInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配额`)
};

const en_quotas = /** @type {(inputs: QuotasInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quotas`)
};

/**
* | output |
* | --- |
* | "Quotas" |
*
* @param {QuotasInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quotas = /** @type {((inputs?: QuotasInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<QuotasInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quotas(inputs)
	return en_quotas(inputs)
});