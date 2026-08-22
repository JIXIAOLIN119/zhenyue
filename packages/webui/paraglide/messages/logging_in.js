/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logging_InInputs */

const zh_logging_in = /** @type {(inputs: Logging_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录中...`)
};

const en_logging_in = /** @type {(inputs: Logging_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logging in...`)
};

/**
* | output |
* | --- |
* | "Logging in..." |
*
* @param {Logging_InInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const logging_in = /** @type {((inputs?: Logging_InInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logging_InInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_logging_in(inputs)
	return en_logging_in(inputs)
});