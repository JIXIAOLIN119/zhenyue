/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} PasswordInputs */

const zh_password = /** @type {(inputs: PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码`)
};

const en_password = /** @type {(inputs: PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password`)
};

/**
* | output |
* | --- |
* | "Password" |
*
* @param {PasswordInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const password = /** @type {((inputs?: PasswordInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<PasswordInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_password(inputs)
	return en_password(inputs)
});