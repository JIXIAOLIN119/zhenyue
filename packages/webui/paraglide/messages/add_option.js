/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_OptionInputs */

const zh_add_option = /** @type {(inputs: Add_OptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加选项`)
};

const en_add_option = /** @type {(inputs: Add_OptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add option`)
};

/**
* | output |
* | --- |
* | "Add option" |
*
* @param {Add_OptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_option = /** @type {((inputs?: Add_OptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_OptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_option(inputs)
	return en_add_option(inputs)
});