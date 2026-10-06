/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} FieldInputs */

const zh_field = /** @type {(inputs: FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字段`)
};

const en_field = /** @type {(inputs: FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field`)
};

/**
* | output |
* | --- |
* | "Field" |
*
* @param {FieldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field = /** @type {((inputs?: FieldInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FieldInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_field(inputs)
	return en_field(inputs)
});