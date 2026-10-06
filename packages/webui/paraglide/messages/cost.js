/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} CostInputs */

const zh_cost = /** @type {(inputs: CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`费用`)
};

const en_cost = /** @type {(inputs: CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cost`)
};

/**
* | output |
* | --- |
* | "Cost" |
*
* @param {CostInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const cost = /** @type {((inputs?: CostInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<CostInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_cost(inputs)
	return en_cost(inputs)
});