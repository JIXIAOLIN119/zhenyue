/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Load_TemplateInputs */

const zh_load_template = /** @type {(inputs: Load_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载模板`)
};

const en_load_template = /** @type {(inputs: Load_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load Template`)
};

/**
* | output |
* | --- |
* | "Load Template" |
*
* @param {Load_TemplateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const load_template = /** @type {((inputs?: Load_TemplateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Load_TemplateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_load_template(inputs)
	return en_load_template(inputs)
});