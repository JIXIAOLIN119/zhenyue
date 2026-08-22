/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_TypeInputs */

const zh_select_type = /** @type {(inputs: Select_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择类型`)
};

const en_select_type = /** @type {(inputs: Select_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select type`)
};

/**
* | output |
* | --- |
* | "Select type" |
*
* @param {Select_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_type = /** @type {((inputs?: Select_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_type(inputs)
	return en_select_type(inputs)
});