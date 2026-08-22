/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_LanguageInputs */

const zh_select_language = /** @type {(inputs: Select_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择语言`)
};

const en_select_language = /** @type {(inputs: Select_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Language`)
};

/**
* | output |
* | --- |
* | "Select Language" |
*
* @param {Select_LanguageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_language = /** @type {((inputs?: Select_LanguageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_LanguageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_language(inputs)
	return en_select_language(inputs)
});