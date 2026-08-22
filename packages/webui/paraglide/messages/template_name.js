/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Template_NameInputs */

const zh_template_name = /** @type {(inputs: Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模板名称`)
};

const en_template_name = /** @type {(inputs: Template_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Template Name`)
};

/**
* | output |
* | --- |
* | "Template Name" |
*
* @param {Template_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const template_name = /** @type {((inputs?: Template_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Template_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_template_name(inputs)
	return en_template_name(inputs)
});