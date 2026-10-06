/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Password_ProtectedInputs */

const zh_password_protected = /** @type {(inputs: Password_ProtectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码保护`)
};

const en_password_protected = /** @type {(inputs: Password_ProtectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password Protected`)
};

/**
* | output |
* | --- |
* | "Password Protected" |
*
* @param {Password_ProtectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const password_protected = /** @type {((inputs?: Password_ProtectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Password_ProtectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_password_protected(inputs)
	return en_password_protected(inputs)
});