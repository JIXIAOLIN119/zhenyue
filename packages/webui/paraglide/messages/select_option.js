/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_OptionInputs */

const zh_select_option = /** @type {(inputs: Select_OptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择选项`)
};

const en_select_option = /** @type {(inputs: Select_OptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select option`)
};

/**
* | output |
* | --- |
* | "Select option" |
*
* @param {Select_OptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_option = /** @type {((inputs?: Select_OptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_OptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_option(inputs)
	return en_select_option(inputs)
});