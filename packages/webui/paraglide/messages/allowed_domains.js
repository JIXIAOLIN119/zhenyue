/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Allowed_DomainsInputs */

const zh_allowed_domains = /** @type {(inputs: Allowed_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`允许的域名`)
};

const en_allowed_domains = /** @type {(inputs: Allowed_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allowed Domains`)
};

/**
* | output |
* | --- |
* | "Allowed Domains" |
*
* @param {Allowed_DomainsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const allowed_domains = /** @type {((inputs?: Allowed_DomainsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Allowed_DomainsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_allowed_domains(inputs)
	return en_allowed_domains(inputs)
});