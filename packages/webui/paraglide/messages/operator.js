/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} OperatorInputs */

const zh_operator = /** @type {(inputs: OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运算符`)
};

const en_operator = /** @type {(inputs: OperatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operator`)
};

/**
* | output |
* | --- |
* | "Operator" |
*
* @param {OperatorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const operator = /** @type {((inputs?: OperatorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<OperatorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_operator(inputs)
	return en_operator(inputs)
});