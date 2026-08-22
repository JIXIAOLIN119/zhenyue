/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Disable_TimestampInputs */

const zh_disable_timestamp = /** @type {(inputs: Disable_TimestampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`禁用时间戳`)
};

const en_disable_timestamp = /** @type {(inputs: Disable_TimestampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disable Timestamp`)
};

/**
* | output |
* | --- |
* | "Disable Timestamp" |
*
* @param {Disable_TimestampInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const disable_timestamp = /** @type {((inputs?: Disable_TimestampInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Disable_TimestampInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_disable_timestamp(inputs)
	return en_disable_timestamp(inputs)
});