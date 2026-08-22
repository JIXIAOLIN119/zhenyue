/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sorted_By_LabelInputs */

const zh_sorted_by_label = /** @type {(inputs: Sorted_By_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序方式`)
};

const en_sorted_by_label = /** @type {(inputs: Sorted_By_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorted by`)
};

/**
* | output |
* | --- |
* | "Sorted by" |
*
* @param {Sorted_By_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sorted_by_label = /** @type {((inputs?: Sorted_By_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sorted_By_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sorted_by_label(inputs)
	return en_sorted_by_label(inputs)
});