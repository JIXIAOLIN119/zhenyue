/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_Is_WithinInputs */

const zh_operator_is_within = /** @type {(inputs: Operator_Is_WithinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在范围内`)
};

const en_operator_is_within = /** @type {(inputs: Operator_Is_WithinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`is within`)
};

/**
* | output |
* | --- |
* | "is within" |
*
* @param {Operator_Is_WithinInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_within = /** @type {((inputs?: Operator_Is_WithinInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_Is_WithinInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_is_within(inputs)
	return en_operator_is_within(inputs)
});