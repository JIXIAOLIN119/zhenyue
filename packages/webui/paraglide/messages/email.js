/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} EmailInputs */

const zh_email = /** @type {(inputs: EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邮箱`)
};

const en_email = /** @type {(inputs: EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email`)
};

/**
* | output |
* | --- |
* | "Email" |
*
* @param {EmailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email = /** @type {((inputs?: EmailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<EmailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_email(inputs)
	return en_email(inputs)
});