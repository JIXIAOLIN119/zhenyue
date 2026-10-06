/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Create_New_TemplateInputs */

const zh_create_new_template = /** @type {(inputs: Create_New_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建新模板`)
};

const en_create_new_template = /** @type {(inputs: Create_New_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create New Template`)
};

/**
* | output |
* | --- |
* | "Create New Template" |
*
* @param {Create_New_TemplateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_new_template = /** @type {((inputs?: Create_New_TemplateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Create_New_TemplateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_create_new_template(inputs)
	return en_create_new_template(inputs)
});