/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Save_As_TemplateInputs */

const zh_save_as_template = /** @type {(inputs: Save_As_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存为模板...`)
};

const en_save_as_template = /** @type {(inputs: Save_As_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save as Template...`)
};

/**
* | output |
* | --- |
* | "Save as Template..." |
*
* @param {Save_As_TemplateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_as_template = /** @type {((inputs?: Save_As_TemplateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Save_As_TemplateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_save_as_template(inputs)
	return en_save_as_template(inputs)
});