/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Password_PlaceholderInputs */

const zh_password_placeholder = /** @type {(inputs: Password_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入密码`)
};

const en_password_placeholder = /** @type {(inputs: Password_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your password`)
};

/**
* | output |
* | --- |
* | "Your password" |
*
* @param {Password_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const password_placeholder = /** @type {((inputs?: Password_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Password_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_password_placeholder(inputs)
	return en_password_placeholder(inputs)
});