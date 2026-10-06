/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Output_Cost_1mInputs */

const zh_output_cost_1m = /** @type {(inputs: Output_Cost_1mInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输出成本（每百万）`)
};

const en_output_cost_1m = /** @type {(inputs: Output_Cost_1mInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Output Cost (1M)`)
};

/**
* | output |
* | --- |
* | "Output Cost (1M)" |
*
* @param {Output_Cost_1mInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const output_cost_1m = /** @type {((inputs?: Output_Cost_1mInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Output_Cost_1mInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_output_cost_1m(inputs)
	return en_output_cost_1m(inputs)
});