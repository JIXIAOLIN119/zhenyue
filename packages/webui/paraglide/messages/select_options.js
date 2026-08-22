/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_OptionsInputs */

const zh_select_options = /** @type {(inputs: Select_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择选项...`)
};

const en_select_options = /** @type {(inputs: Select_OptionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select options...`)
};

/**
* | output |
* | --- |
* | "Select options..." |
*
* @param {Select_OptionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_options = /** @type {((inputs?: Select_OptionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_OptionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_options(inputs)
	return en_select_options(inputs)
});