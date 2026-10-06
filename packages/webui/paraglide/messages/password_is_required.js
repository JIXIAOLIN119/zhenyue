/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Password_Is_RequiredInputs */

const zh_password_is_required = /** @type {(inputs: Password_Is_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码为必填项`)
};

const en_password_is_required = /** @type {(inputs: Password_Is_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password is required`)
};

/**
* | output |
* | --- |
* | "Password is required" |
*
* @param {Password_Is_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const password_is_required = /** @type {((inputs?: Password_Is_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Password_Is_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_password_is_required(inputs)
	return en_password_is_required(inputs)
});