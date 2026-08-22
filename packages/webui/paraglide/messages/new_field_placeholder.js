/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} New_Field_PlaceholderInputs */

const zh_new_field_placeholder = /** @type {(inputs: New_Field_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新字段`)
};

const en_new_field_placeholder = /** @type {(inputs: New_Field_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Field`)
};

/**
* | output |
* | --- |
* | "New Field" |
*
* @param {New_Field_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const new_field_placeholder = /** @type {((inputs?: New_Field_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<New_Field_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_new_field_placeholder(inputs)
	return en_new_field_placeholder(inputs)
});