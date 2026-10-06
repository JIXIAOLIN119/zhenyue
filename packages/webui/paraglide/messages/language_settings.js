/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Language_SettingsInputs */

const zh_language_settings = /** @type {(inputs: Language_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言设置`)
};

const en_language_settings = /** @type {(inputs: Language_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language Settings`)
};

/**
* | output |
* | --- |
* | "Language Settings" |
*
* @param {Language_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const language_settings = /** @type {((inputs?: Language_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Language_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_language_settings(inputs)
	return en_language_settings(inputs)
});