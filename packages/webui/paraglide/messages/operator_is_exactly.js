/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_Is_ExactlyInputs */

const zh_operator_is_exactly = /** @type {(inputs: Operator_Is_ExactlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完全匹配`)
};

const en_operator_is_exactly = /** @type {(inputs: Operator_Is_ExactlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`is exactly`)
};

/**
* | output |
* | --- |
* | "is exactly" |
*
* @param {Operator_Is_ExactlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is_exactly = /** @type {((inputs?: Operator_Is_ExactlyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_Is_ExactlyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_is_exactly(inputs)
	return en_operator_is_exactly(inputs)
});