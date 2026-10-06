/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Enter_PasswordInputs */

const zh_enter_password = /** @type {(inputs: Enter_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入密码`)
};

const en_enter_password = /** @type {(inputs: Enter_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter password`)
};

/**
* | output |
* | --- |
* | "Enter password" |
*
* @param {Enter_PasswordInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_password = /** @type {((inputs?: Enter_PasswordInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Enter_PasswordInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_enter_password(inputs)
	return en_enter_password(inputs)
});