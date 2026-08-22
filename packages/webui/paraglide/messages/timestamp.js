/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} TimestampInputs */

const zh_timestamp = /** @type {(inputs: TimestampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时间戳`)
};

const en_timestamp = /** @type {(inputs: TimestampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timestamp`)
};

/**
* | output |
* | --- |
* | "Timestamp" |
*
* @param {TimestampInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const timestamp = /** @type {((inputs?: TimestampInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<TimestampInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_timestamp(inputs)
	return en_timestamp(inputs)
});