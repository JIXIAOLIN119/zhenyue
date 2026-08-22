/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} New_OptionInputs */

const zh_new_option = /** @type {(inputs: New_OptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新选项`)
};

const en_new_option = /** @type {(inputs: New_OptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Option`)
};

/**
* | output |
* | --- |
* | "New Option" |
*
* @param {New_OptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const new_option = /** @type {((inputs?: New_OptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<New_OptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_new_option(inputs)
	return en_new_option(inputs)
});