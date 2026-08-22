/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sort_Newest_To_OldestInputs */

const zh_sort_newest_to_oldest = /** @type {(inputs: Sort_Newest_To_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新 → 最旧`)
};

const en_sort_newest_to_oldest = /** @type {(inputs: Sort_Newest_To_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest → Oldest`)
};

/**
* | output |
* | --- |
* | "Newest → Oldest" |
*
* @param {Sort_Newest_To_OldestInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_newest_to_oldest = /** @type {((inputs?: Sort_Newest_To_OldestInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_Newest_To_OldestInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sort_newest_to_oldest(inputs)
	return en_sort_newest_to_oldest(inputs)
});