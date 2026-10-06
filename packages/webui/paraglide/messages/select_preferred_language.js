/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_Preferred_LanguageInputs */

const zh_select_preferred_language = /** @type {(inputs: Select_Preferred_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择您首选的显示语言。`)
};

const en_select_preferred_language = /** @type {(inputs: Select_Preferred_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select your preferred display language.`)
};

/**
* | output |
* | --- |
* | "Select your preferred display language." |
*
* @param {Select_Preferred_LanguageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_preferred_language = /** @type {((inputs?: Select_Preferred_LanguageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_Preferred_LanguageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_preferred_language(inputs)
	return en_select_preferred_language(inputs)
});