/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Operator_IsInputs */

const zh_operator_is = /** @type {(inputs: Operator_IsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`是`)
};

const en_operator_is = /** @type {(inputs: Operator_IsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`is`)
};

/**
* | output |
* | --- |
* | "is" |
*
* @param {Operator_IsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator_is = /** @type {((inputs?: Operator_IsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Operator_IsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator_is(inputs)
	return en_operator_is(inputs)
});