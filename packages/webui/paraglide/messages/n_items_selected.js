/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} N_Items_SelectedInputs */

const zh_n_items_selected = /** @type {(inputs: N_Items_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已选择 ${i?.count} 个项目`)
};

const en_n_items_selected = /** @type {(inputs: N_Items_SelectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} Item(s) selected`)
};

/**
* | output |
* | --- |
* | "{count} Item(s) selected" |
*
* @param {N_Items_SelectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_items_selected = /** @type {((inputs: N_Items_SelectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<N_Items_SelectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_n_items_selected(inputs)
	return en_n_items_selected(inputs)
});