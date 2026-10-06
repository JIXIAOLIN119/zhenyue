/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Resource_QuotasInputs */

const zh_resource_quotas = /** @type {(inputs: Resource_QuotasInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`资源配额`)
};

const en_resource_quotas = /** @type {(inputs: Resource_QuotasInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resource Quotas`)
};

/**
* | output |
* | --- |
* | "Resource Quotas" |
*
* @param {Resource_QuotasInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const resource_quotas = /** @type {((inputs?: Resource_QuotasInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Resource_QuotasInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_resource_quotas(inputs)
	return en_resource_quotas(inputs)
});