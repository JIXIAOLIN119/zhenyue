/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_PeriodInputs */

const zh_quota_period = /** @type {(inputs: Quota_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`周期窗口`)
};

const en_quota_period = /** @type {(inputs: Quota_PeriodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Period Window`)
};

/**
* | output |
* | --- |
* | "Period Window" |
*
* @param {Quota_PeriodInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_period = /** @type {((inputs?: Quota_PeriodInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_PeriodInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_period(inputs)
	return en_quota_period(inputs)
});