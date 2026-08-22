/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_Has_Any_OfInputs */

const zh_operator_has_any_of = /** @type {(inputs: Operator_Has_Any_OfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`含有其中之一`)
};

const en_operator_has_any_of = /** @type {(inputs: Operator_Has_Any_OfInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`has any of`)
};

/**
* | output |
* | --- |
* | "has any of" |
*
* @param {Operator_Has_Any_OfInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_has_any_of = /** @type {((inputs?: Operator_Has_Any_OfInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_Has_Any_OfInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_has_any_of(inputs)
	return en_operator_has_any_of(inputs)
});