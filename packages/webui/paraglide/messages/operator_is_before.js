/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_Is_BeforeInputs */

const zh_operator_is_before = /** @type {(inputs: Operator_Is_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在之前`)
};

const en_operator_is_before = /** @type {(inputs: Operator_Is_BeforeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`is before`)
};

/**
* | output |
* | --- |
* | "is before" |
*
* @param {Operator_Is_BeforeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_before = /** @type {((inputs?: Operator_Is_BeforeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_Is_BeforeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_is_before(inputs)
	return en_operator_is_before(inputs)
});