/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_Is_AfterInputs */

const zh_operator_is_after = /** @type {(inputs: Operator_Is_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在之后`)
};

const en_operator_is_after = /** @type {(inputs: Operator_Is_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`is after`)
};

/**
* | output |
* | --- |
* | "is after" |
*
* @param {Operator_Is_AfterInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_after = /** @type {((inputs?: Operator_Is_AfterInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_Is_AfterInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_is_after(inputs)
	return en_operator_is_after(inputs)
});