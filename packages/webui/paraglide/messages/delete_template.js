/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_TemplateInputs */

const zh_delete_template = /** @type {(inputs: Delete_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除模板`)
};

const en_delete_template = /** @type {(inputs: Delete_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Template`)
};

/**
* | output |
* | --- |
* | "Delete Template" |
*
* @param {Delete_TemplateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_template = /** @type {((inputs?: Delete_TemplateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_TemplateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_template(inputs)
	return en_delete_template(inputs)
});