/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_Is_On_Or_AfterInputs */

const zh_operator_is_on_or_after = /** @type {(inputs: Operator_Is_On_Or_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在当天或之后`)
};

const en_operator_is_on_or_after = /** @type {(inputs: Operator_Is_On_Or_AfterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`is on or after`)
};

/**
* | output |
* | --- |
* | "is on or after" |
*
* @param {Operator_Is_On_Or_AfterInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_on_or_after = /** @type {((inputs?: Operator_Is_On_Or_AfterInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_Is_On_Or_AfterInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_is_on_or_after(inputs)
	return en_operator_is_on_or_after(inputs)
});