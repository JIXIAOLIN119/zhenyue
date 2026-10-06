/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Period_5hourInputs */

const zh_quota_period_5hour = /** @type {(inputs: Quota_Period_5hourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 小时`)
};

const en_quota_period_5hour = /** @type {(inputs: Quota_Period_5hourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`5 Hours`)
};

/**
* | output |
* | --- |
* | "5 Hours" |
*
* @param {Quota_Period_5hourInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_period_5hour = /** @type {((inputs?: Quota_Period_5hourInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Period_5hourInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_period_5hour(inputs)
	return en_quota_period_5hour(inputs)
});