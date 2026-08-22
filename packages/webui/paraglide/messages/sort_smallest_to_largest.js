/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sort_Smallest_To_LargestInputs */

const zh_sort_smallest_to_largest = /** @type {(inputs: Sort_Smallest_To_LargestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最小 → 最大`)
};

const en_sort_smallest_to_largest = /** @type {(inputs: Sort_Smallest_To_LargestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Smallest → Largest`)
};

/**
* | output |
* | --- |
* | "Smallest → Largest" |
*
* @param {Sort_Smallest_To_LargestInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_smallest_to_largest = /** @type {((inputs?: Sort_Smallest_To_LargestInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_Smallest_To_LargestInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sort_smallest_to_largest(inputs)
	return en_sort_smallest_to_largest(inputs)
});