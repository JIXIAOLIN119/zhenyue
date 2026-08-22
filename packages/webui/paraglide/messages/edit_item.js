/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Edit_ItemInputs */

const zh_edit_item = /** @type {(inputs: Edit_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑 ${i?.name}`)
};

const en_edit_item = /** @type {(inputs: Edit_ItemInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edit ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Edit {name}" |
*
* @param {Edit_ItemInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const edit_item = /** @type {((inputs: Edit_ItemInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Edit_ItemInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_edit_item(inputs)
	return en_edit_item(inputs)
});