/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_Is_EmptyInputs */

const zh_operator_is_empty = /** @type {(inputs: Operator_Is_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为空`)
};

const en_operator_is_empty = /** @type {(inputs: Operator_Is_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`is empty`)
};

/**
* | output |
* | --- |
* | "is empty" |
*
* @param {Operator_Is_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_empty = /** @type {((inputs?: Operator_Is_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_Is_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_is_empty(inputs)
	return en_operator_is_empty(inputs)
});