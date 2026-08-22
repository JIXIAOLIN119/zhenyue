/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Options_FoundInputs */

const zh_no_options_found = /** @type {(inputs: No_Options_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到选项`)
};

const en_no_options_found = /** @type {(inputs: No_Options_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No options found`)
};

/**
* | output |
* | --- |
* | "No options found" |
*
* @param {No_Options_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_options_found = /** @type {((inputs?: No_Options_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Options_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_options_found(inputs)
	return en_no_options_found(inputs)
});