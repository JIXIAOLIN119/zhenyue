/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_AddressInputs */

const zh_email_address = /** @type {(inputs: Email_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱地址`)
};

const en_email_address = /** @type {(inputs: Email_AddressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email Address`)
};

/**
* | output |
* | --- |
* | "Email Address" |
*
* @param {Email_AddressInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_address = /** @type {((inputs?: Email_AddressInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_AddressInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_email_address(inputs)
	return en_email_address(inputs)
});