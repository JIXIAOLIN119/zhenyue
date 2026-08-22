/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Invalid_Email_AddressInputs */

const zh_invalid_email_address = /** @type {(inputs: Invalid_Email_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无效的邮箱地址`)
};

const en_invalid_email_address = /** @type {(inputs: Invalid_Email_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid email address`)
};

/**
* | output |
* | --- |
* | "Invalid email address" |
*
* @param {Invalid_Email_AddressInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const invalid_email_address = /** @type {((inputs?: Invalid_Email_AddressInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Invalid_Email_AddressInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_invalid_email_address(inputs)
	return en_invalid_email_address(inputs)
});