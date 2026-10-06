/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Item_SelectedInputs */

const zh_no_item_selected = /** @type {(inputs: No_Item_SelectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未选择项目`)
};

const en_no_item_selected = /** @type {(inputs: No_Item_SelectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No item selected`)
};

/**
* | output |
* | --- |
* | "No item selected" |
*
* @param {No_Item_SelectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_item_selected = /** @type {((inputs?: No_Item_SelectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Item_SelectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_item_selected(inputs)
	return en_no_item_selected(inputs)
});