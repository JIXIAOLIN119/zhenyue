/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Type_Delete_To_ConfirmInputs */

const zh_type_delete_to_confirm = /** @type {(inputs: Type_Delete_To_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入 **delete** 以确认：`)
};

const en_type_delete_to_confirm = /** @type {(inputs: Type_Delete_To_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type **delete** to confirm:`)
};

/**
* | output |
* | --- |
* | "Type **delete** to confirm:" |
*
* @param {Type_Delete_To_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const type_delete_to_confirm = /** @type {((inputs?: Type_Delete_To_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Type_Delete_To_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_type_delete_to_confirm(inputs)
	return en_type_delete_to_confirm(inputs)
});