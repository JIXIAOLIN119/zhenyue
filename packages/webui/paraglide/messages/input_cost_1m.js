/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Input_Cost_1mInputs */

const zh_input_cost_1m = /** @type {(inputs: Input_Cost_1mInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入成本（每百万）`)
};

const en_input_cost_1m = /** @type {(inputs: Input_Cost_1mInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Input Cost (1M)`)
};

/**
* | output |
* | --- |
* | "Input Cost (1M)" |
*
* @param {Input_Cost_1mInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const input_cost_1m = /** @type {((inputs?: Input_Cost_1mInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Input_Cost_1mInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_input_cost_1m(inputs)
	return en_input_cost_1m(inputs)
});