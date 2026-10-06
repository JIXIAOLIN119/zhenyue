/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Password_Min_LengthInputs */

const zh_password_min_length = /** @type {(inputs: Password_Min_LengthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码至少需要 3 个字符`)
};

const en_password_min_length = /** @type {(inputs: Password_Min_LengthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password must be at least 3 characters`)
};

/**
* | output |
* | --- |
* | "Password must be at least 3 characters" |
*
* @param {Password_Min_LengthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const password_min_length = /** @type {((inputs?: Password_Min_LengthInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Password_Min_LengthInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_password_min_length(inputs)
	return en_password_min_length(inputs)
});