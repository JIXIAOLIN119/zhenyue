/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} LoginInputs */

const zh_login = /** @type {(inputs: LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录`)
};

const en_login = /** @type {(inputs: LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Login`)
};

/**
* | output |
* | --- |
* | "Login" |
*
* @param {LoginInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login = /** @type {((inputs?: LoginInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<LoginInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_login(inputs)
	return en_login(inputs)
});