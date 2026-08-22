/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_SubtitleInputs */

const zh_login_subtitle = /** @type {(inputs: Login_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入您的凭证以访问您的账户。`)
};

const en_login_subtitle = /** @type {(inputs: Login_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your credentials to access your account.`)
};

/**
* | output |
* | --- |
* | "Enter your credentials to access your account." |
*
* @param {Login_SubtitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_subtitle = /** @type {((inputs?: Login_SubtitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_SubtitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_login_subtitle(inputs)
	return en_login_subtitle(inputs)
});