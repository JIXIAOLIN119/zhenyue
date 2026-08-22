/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_LimitInputs */

const zh_quota_limit = /** @type {(inputs: Quota_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上限`)
};

const en_quota_limit = /** @type {(inputs: Quota_LimitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limit`)
};

/**
* | output |
* | --- |
* | "Limit" |
*
* @param {Quota_LimitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_limit = /** @type {((inputs?: Quota_LimitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_LimitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_limit(inputs)
	return en_quota_limit(inputs)
});