/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Template_DeletedInputs */

const zh_template_deleted = /** @type {(inputs: Template_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模板删除成功`)
};

const en_template_deleted = /** @type {(inputs: Template_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Template deleted successfully`)
};

/**
* | output |
* | --- |
* | "Template deleted successfully" |
*
* @param {Template_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const template_deleted = /** @type {((inputs?: Template_DeletedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Template_DeletedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_template_deleted(inputs)
	return en_template_deleted(inputs)
});