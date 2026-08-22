/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Period_1dayInputs */

const zh_quota_period_1day = /** @type {(inputs: Quota_Period_1dayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 天`)
};

const en_quota_period_1day = /** @type {(inputs: Quota_Period_1dayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 Day`)
};

/**
* | output |
* | --- |
* | "1 Day" |
*
* @param {Quota_Period_1dayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_period_1day = /** @type {((inputs?: Quota_Period_1dayInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Period_1dayInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_period_1day(inputs)
	return en_quota_period_1day(inputs)
});