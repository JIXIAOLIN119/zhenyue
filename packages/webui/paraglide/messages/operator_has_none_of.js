/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_Has_None_OfInputs */

const zh_operator_has_none_of = /** @type {(inputs: Operator_Has_None_OfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不含有其中任何`)
};

const en_operator_has_none_of = /** @type {(inputs: Operator_Has_None_OfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`has none of`)
};

/**
* | output |
* | --- |
* | "has none of" |
*
* @param {Operator_Has_None_OfInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_has_none_of = /** @type {((inputs?: Operator_Has_None_OfInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_Has_None_OfInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_has_none_of(inputs)
	return en_operator_has_none_of(inputs)
});