/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} EnglishInputs */

const zh_english = /** @type {(inputs: EnglishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`English`)
};

const en_english = /** @type {(inputs: EnglishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`English`)
};

/**
* | output |
* | --- |
* | "English" |
*
* @param {EnglishInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const english = /** @type {((inputs?: EnglishInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<EnglishInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_english(inputs)
	return en_english(inputs)
});