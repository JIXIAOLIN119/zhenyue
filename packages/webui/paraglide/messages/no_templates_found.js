/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Templates_FoundInputs */

const zh_no_templates_found = /** @type {(inputs: No_Templates_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有保存的模板`)
};

const en_no_templates_found = /** @type {(inputs: No_Templates_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No saved templates`)
};

/**
* | output |
* | --- |
* | "No saved templates" |
*
* @param {No_Templates_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_templates_found = /** @type {((inputs?: No_Templates_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Templates_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_templates_found(inputs)
	return en_no_templates_found(inputs)
});