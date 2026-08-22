/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Overwrite_Existing_TemplateInputs */

const zh_overwrite_existing_template = /** @type {(inputs: Overwrite_Existing_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`覆盖现有模板`)
};

const en_overwrite_existing_template = /** @type {(inputs: Overwrite_Existing_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overwrite Existing Template`)
};

/**
* | output |
* | --- |
* | "Overwrite Existing Template" |
*
* @param {Overwrite_Existing_TemplateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const overwrite_existing_template = /** @type {((inputs?: Overwrite_Existing_TemplateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Overwrite_Existing_TemplateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_overwrite_existing_template(inputs)
	return en_overwrite_existing_template(inputs)
});