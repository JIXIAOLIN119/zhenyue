/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Template_SavedInputs */

const zh_template_saved = /** @type {(inputs: Template_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模板保存成功`)
};

const en_template_saved = /** @type {(inputs: Template_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Template saved successfully`)
};

/**
* | output |
* | --- |
* | "Template saved successfully" |
*
* @param {Template_SavedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const template_saved = /** @type {((inputs?: Template_SavedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Template_SavedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_template_saved(inputs)
	return en_template_saved(inputs)
});