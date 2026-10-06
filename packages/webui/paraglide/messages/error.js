/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} ErrorInputs */

const zh_error = /** @type {(inputs: ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误`)
};

const en_error = /** @type {(inputs: ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

/**
* | output |
* | --- |
* | "Error" |
*
* @param {ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error = /** @type {((inputs?: ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_error(inputs)
	return en_error(inputs)
});