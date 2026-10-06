/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ type: NonNullable<unknown> }} Delete_Confirm_DescriptionInputs */

const zh_delete_confirm_description = /** @type {(inputs: Delete_Confirm_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定要删除此${i?.type}吗？此操作无法撤销。`)
};

const en_delete_confirm_description = /** @type {(inputs: Delete_Confirm_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Are you sure you want to delete this ${i?.type}? This action cannot be undone.`)
};

/**
* | output |
* | --- |
* | "Are you sure you want to delete this {type}? This action cannot be undone." |
*
* @param {Delete_Confirm_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_confirm_description = /** @type {((inputs: Delete_Confirm_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Confirm_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_confirm_description(inputs)
	return en_delete_confirm_description(inputs)
});