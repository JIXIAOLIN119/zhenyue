/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} New_FieldInputs */

const zh_new_field = /** @type {(inputs: New_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建字段`)
};

const en_new_field = /** @type {(inputs: New_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Field`)
};

/**
* | output |
* | --- |
* | "New Field" |
*
* @param {New_FieldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const new_field = /** @type {((inputs?: New_FieldInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<New_FieldInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_new_field(inputs)
	return en_new_field(inputs)
});