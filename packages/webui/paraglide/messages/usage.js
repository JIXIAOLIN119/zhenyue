/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} UsageInputs */

const zh_usage = /** @type {(inputs: UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用量`)
};

const en_usage = /** @type {(inputs: UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usage`)
};

/**
* | output |
* | --- |
* | "Usage" |
*
* @param {UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const usage = /** @type {((inputs?: UsageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<UsageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_usage(inputs)
	return en_usage(inputs)
});