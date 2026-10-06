/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_ActiveInputs */

const zh_quota_active = /** @type {(inputs: Quota_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用中`)
};

const en_quota_active = /** @type {(inputs: Quota_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active`)
};

/**
* | output |
* | --- |
* | "Active" |
*
* @param {Quota_ActiveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_active = /** @type {((inputs?: Quota_ActiveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_ActiveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_active(inputs)
	return en_quota_active(inputs)
});