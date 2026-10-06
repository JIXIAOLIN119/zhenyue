/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_ConsumedInputs */

const zh_quota_consumed = /** @type {(inputs: Quota_ConsumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已消耗`)
};

const en_quota_consumed = /** @type {(inputs: Quota_ConsumedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consumed`)
};

/**
* | output |
* | --- |
* | "Consumed" |
*
* @param {Quota_ConsumedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_consumed = /** @type {((inputs?: Quota_ConsumedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_ConsumedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_consumed(inputs)
	return en_quota_consumed(inputs)
});