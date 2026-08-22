/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sign_UpInputs */

const zh_sign_up = /** @type {(inputs: Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册`)
};

const en_sign_up = /** @type {(inputs: Sign_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign up`)
};

/**
* | output |
* | --- |
* | "Sign up" |
*
* @param {Sign_UpInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sign_up = /** @type {((inputs?: Sign_UpInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sign_UpInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sign_up(inputs)
	return en_sign_up(inputs)
});