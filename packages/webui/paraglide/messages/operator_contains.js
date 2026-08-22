/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_ContainsInputs */

const zh_operator_contains = /** @type {(inputs: Operator_ContainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`包含`)
};

const en_operator_contains = /** @type {(inputs: Operator_ContainsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`contains`)
};

/**
* | output |
* | --- |
* | "contains" |
*
* @param {Operator_ContainsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_contains = /** @type {((inputs?: Operator_ContainsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_ContainsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_contains(inputs)
	return en_operator_contains(inputs)
});