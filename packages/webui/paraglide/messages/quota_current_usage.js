/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Current_UsageInputs */

const zh_quota_current_usage = /** @type {(inputs: Quota_Current_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前使用量`)
};

const en_quota_current_usage = /** @type {(inputs: Quota_Current_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current Usage`)
};

/**
* | output |
* | --- |
* | "Current Usage" |
*
* @param {Quota_Current_UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_current_usage = /** @type {((inputs?: Quota_Current_UsageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Current_UsageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_current_usage(inputs)
	return en_quota_current_usage(inputs)
});