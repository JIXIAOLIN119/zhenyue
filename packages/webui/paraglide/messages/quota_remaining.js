/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_RemainingInputs */

const zh_quota_remaining = /** @type {(inputs: Quota_RemainingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`剩余额度`)
};

const en_quota_remaining = /** @type {(inputs: Quota_RemainingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remaining`)
};

/**
* | output |
* | --- |
* | "Remaining" |
*
* @param {Quota_RemainingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_remaining = /** @type {((inputs?: Quota_RemainingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_RemainingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_remaining(inputs)
	return en_quota_remaining(inputs)
});