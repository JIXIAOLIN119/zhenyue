/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Pending_DomainsInputs */

const zh_no_pending_domains = /** @type {(inputs: No_Pending_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有待审核的域名`)
};

const en_no_pending_domains = /** @type {(inputs: No_Pending_DomainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pending domains requiring approval`)
};

/**
* | output |
* | --- |
* | "No pending domains requiring approval" |
*
* @param {No_Pending_DomainsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_pending_domains = /** @type {((inputs?: No_Pending_DomainsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Pending_DomainsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_pending_domains(inputs)
	return en_no_pending_domains(inputs)
});