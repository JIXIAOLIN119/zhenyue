/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_AvailableInputs */

const zh_quota_available = /** @type {(inputs: Quota_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配额可用`)
};

const en_quota_available = /** @type {(inputs: Quota_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quota available`)
};

/**
* | output |
* | --- |
* | "Quota available" |
*
* @param {Quota_AvailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_available = /** @type {((inputs?: Quota_AvailableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_AvailableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_available(inputs)
	return en_quota_available(inputs)
});