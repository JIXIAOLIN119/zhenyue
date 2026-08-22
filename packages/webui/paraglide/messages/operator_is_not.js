/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_Is_NotInputs */

const zh_operator_is_not = /** @type {(inputs: Operator_Is_NotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不是`)
};

const en_operator_is_not = /** @type {(inputs: Operator_Is_NotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`is not`)
};

/**
* | output |
* | --- |
* | "is not" |
*
* @param {Operator_Is_NotInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_not = /** @type {((inputs?: Operator_Is_NotInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_Is_NotInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_is_not(inputs)
	return en_operator_is_not(inputs)
});