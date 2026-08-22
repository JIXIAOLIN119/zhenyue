/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ field: NonNullable<unknown> }} Sorted_ByInputs */

const zh_sorted_by = /** @type {(inputs: Sorted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`按${i?.field}排序`)
};

const en_sorted_by = /** @type {(inputs: Sorted_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sorted by ${i?.field}`)
};

/**
* | output |
* | --- |
* | "Sorted by {field}" |
*
* @param {Sorted_ByInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sorted_by = /** @type {((inputs: Sorted_ByInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sorted_ByInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sorted_by(inputs)
	return en_sorted_by(inputs)
});