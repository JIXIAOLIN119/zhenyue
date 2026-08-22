/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Autofill_Source_Help_TitleInputs */

const zh_autofill_source_help_title = /** @type {(inputs: Autofill_Source_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动填充来源说明`)
};

const en_autofill_source_help_title = /** @type {(inputs: Autofill_Source_Help_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autofill Source Guide`)
};

/**
* | output |
* | --- |
* | "Autofill Source Guide" |
*
* @param {Autofill_Source_Help_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_help_title = /** @type {((inputs?: Autofill_Source_Help_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Autofill_Source_Help_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_autofill_source_help_title(inputs)
	return en_autofill_source_help_title(inputs)
});