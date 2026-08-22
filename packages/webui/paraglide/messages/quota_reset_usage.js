/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Reset_UsageInputs */

const zh_quota_reset_usage = /** @type {(inputs: Quota_Reset_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置使用量`)
};

const en_quota_reset_usage = /** @type {(inputs: Quota_Reset_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset Usage`)
};

/**
* | output |
* | --- |
* | "Reset Usage" |
*
* @param {Quota_Reset_UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_reset_usage = /** @type {((inputs?: Quota_Reset_UsageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Reset_UsageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_reset_usage(inputs)
	return en_quota_reset_usage(inputs)
});