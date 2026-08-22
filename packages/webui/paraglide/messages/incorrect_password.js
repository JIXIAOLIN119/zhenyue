/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Incorrect_PasswordInputs */

const zh_incorrect_password = /** @type {(inputs: Incorrect_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码错误，请重试。`)
};

const en_incorrect_password = /** @type {(inputs: Incorrect_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incorrect password. Please try again.`)
};

/**
* | output |
* | --- |
* | "Incorrect password. Please try again." |
*
* @param {Incorrect_PasswordInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const incorrect_password = /** @type {((inputs?: Incorrect_PasswordInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Incorrect_PasswordInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_incorrect_password(inputs)
	return en_incorrect_password(inputs)
});