/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Language_UpdatedInputs */

const zh_language_updated = /** @type {(inputs: Language_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言更新成功`)
};

const en_language_updated = /** @type {(inputs: Language_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language updated successfully`)
};

/**
* | output |
* | --- |
* | "Language updated successfully" |
*
* @param {Language_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const language_updated = /** @type {((inputs?: Language_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Language_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_language_updated(inputs)
	return en_language_updated(inputs)
});