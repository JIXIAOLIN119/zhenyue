/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Personal_SettingsInputs */

const zh_personal_settings = /** @type {(inputs: Personal_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人设置`)
};

const en_personal_settings = /** @type {(inputs: Personal_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personal Settings`)
};

/**
* | output |
* | --- |
* | "Personal Settings" |
*
* @param {Personal_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const personal_settings = /** @type {((inputs?: Personal_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Personal_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_personal_settings(inputs)
	return en_personal_settings(inputs)
});