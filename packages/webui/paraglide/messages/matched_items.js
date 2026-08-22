/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Matched_ItemsInputs */

const zh_matched_items = /** @type {(inputs: Matched_ItemsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`匹配了 ${i?.count} 项`)
};

const en_matched_items = /** @type {(inputs: Matched_ItemsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Matched ${i?.count} items`)
};

/**
* | output |
* | --- |
* | "Matched {count} items" |
*
* @param {Matched_ItemsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const matched_items = /** @type {((inputs: Matched_ItemsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Matched_ItemsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_matched_items(inputs)
	return en_matched_items(inputs)
});