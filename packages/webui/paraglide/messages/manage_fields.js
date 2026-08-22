/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manage_FieldsInputs */

const zh_manage_fields = /** @type {(inputs: Manage_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理字段`)
};

const en_manage_fields = /** @type {(inputs: Manage_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage Fields`)
};

/**
* | output |
* | --- |
* | "Manage Fields" |
*
* @param {Manage_FieldsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const manage_fields = /** @type {((inputs?: Manage_FieldsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manage_FieldsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_manage_fields(inputs)
	return en_manage_fields(inputs)
});