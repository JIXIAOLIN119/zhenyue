/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Filter_By_Item_IdInputs */

const zh_filter_by_item_id = /** @type {(inputs: Filter_By_Item_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按项目/条目 ID 筛选`)
};

const en_filter_by_item_id = /** @type {(inputs: Filter_By_Item_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter by Item ID`)
};

/**
* | output |
* | --- |
* | "Filter by Item ID" |
*
* @param {Filter_By_Item_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filter_by_item_id = /** @type {((inputs?: Filter_By_Item_IdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Filter_By_Item_IdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_filter_by_item_id(inputs)
	return en_filter_by_item_id(inputs)
});