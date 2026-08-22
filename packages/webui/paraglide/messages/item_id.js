/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Item_IdInputs */

const zh_item_id = /** @type {(inputs: Item_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`条目 ID`)
};

const en_item_id = /** @type {(inputs: Item_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Item ID`)
};

/**
* | output |
* | --- |
* | "Item ID" |
*
* @param {Item_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const item_id = /** @type {((inputs?: Item_IdInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Item_IdInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_item_id(inputs)
	return en_item_id(inputs)
});