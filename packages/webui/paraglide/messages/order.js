/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} OrderInputs */

const zh_order = /** @type {(inputs: OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`顺序`)
};

const en_order = /** @type {(inputs: OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Order`)
};

/**
* | output |
* | --- |
* | "Order" |
*
* @param {OrderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const order = /** @type {((inputs?: OrderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<OrderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_order(inputs)
	return en_order(inputs)
});