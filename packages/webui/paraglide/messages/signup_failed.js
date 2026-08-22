/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signup_FailedInputs */

const zh_signup_failed = /** @type {(inputs: Signup_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册失败`)
};

const en_signup_failed = /** @type {(inputs: Signup_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signup failed`)
};

/**
* | output |
* | --- |
* | "Signup failed" |
*
* @param {Signup_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const signup_failed = /** @type {((inputs?: Signup_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signup_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_signup_failed(inputs)
	return en_signup_failed(inputs)
});