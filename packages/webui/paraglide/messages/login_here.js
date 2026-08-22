/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_HereInputs */

const zh_login_here = /** @type {(inputs: Login_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在此登录`)
};

const en_login_here = /** @type {(inputs: Login_HereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Login here`)
};

/**
* | output |
* | --- |
* | "Login here" |
*
* @param {Login_HereInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_here = /** @type {((inputs?: Login_HereInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_HereInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_login_here(inputs)
	return en_login_here(inputs)
});