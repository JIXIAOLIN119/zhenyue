/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Period_ResetsInputs */

const zh_quota_period_resets = /** @type {(inputs: Quota_Period_ResetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置于`)
};

const en_quota_period_resets = /** @type {(inputs: Quota_Period_ResetsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resets in`)
};

/**
* | output |
* | --- |
* | "Resets in" |
*
* @param {Quota_Period_ResetsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_period_resets = /** @type {((inputs?: Quota_Period_ResetsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Period_ResetsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_period_resets(inputs)
	return en_quota_period_resets(inputs)
});