/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} DescendingInputs */

const zh_descending = /** @type {(inputs: DescendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`降序`)
};

const en_descending = /** @type {(inputs: DescendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descending`)
};

/**
* | output |
* | --- |
* | "Descending" |
*
* @param {DescendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const descending = /** @type {((inputs?: DescendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<DescendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_descending(inputs)
	return en_descending(inputs)
});