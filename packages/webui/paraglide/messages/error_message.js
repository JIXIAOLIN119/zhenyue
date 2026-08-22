/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ message: NonNullable<unknown> }} Error_MessageInputs */

const zh_error_message = /** @type {(inputs: Error_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`错误：${i?.message}`)
};

const en_error_message = /** @type {(inputs: Error_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Error: ${i?.message}`)
};

/**
* | output |
* | --- |
* | "Error: {message}" |
*
* @param {Error_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error_message = /** @type {((inputs: Error_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_error_message(inputs)
	return en_error_message(inputs)
});