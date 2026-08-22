/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Template_UpdatedInputs */

const zh_template_updated = /** @type {(inputs: Template_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模板更新成功`)
};

const en_template_updated = /** @type {(inputs: Template_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Template updated successfully`)
};

/**
* | output |
* | --- |
* | "Template updated successfully" |
*
* @param {Template_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const template_updated = /** @type {((inputs?: Template_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Template_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_template_updated(inputs)
	return en_template_updated(inputs)
});