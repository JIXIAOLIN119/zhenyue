/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Option_Name_PlaceholderInputs */

const zh_option_name_placeholder = /** @type {(inputs: Option_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选项名称`)
};

const en_option_name_placeholder = /** @type {(inputs: Option_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Option name`)
};

/**
* | output |
* | --- |
* | "Option name" |
*
* @param {Option_Name_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const option_name_placeholder = /** @type {((inputs?: Option_Name_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Option_Name_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_option_name_placeholder(inputs)
	return en_option_name_placeholder(inputs)
});